import { useMemo } from "react";
import {
  FixedSizeList as List,
  type ListChildComponentProps,
} from "react-window";
import { useExercises } from "../../hooks/useExercises";
import ExerciseCard from "../Card/ExercisesCard";
import { FilterBar } from "../Filter/FilterBar";
import {
  useExercisesByBodyPart,
  useExercisesByEquipment,
  useExercisesByTarget,
} from "../../hooks/useFilter";
import { Loading } from "../Loading";
import type { Exercise } from "../../types";
import React from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { useWindowSize } from "../../hooks/useWindow";
import { showError } from "../../lib/toastify";

interface ExerciseListProps {
  selectedTargets: string[];
  selectedEquipments: string[];
  selectedBodyParts: string[];
  onFilterSelect: (
    type: "target" | "equipment" | "bodyPart",
    value: string
  ) => void;
}

const ExerciseList = React.memo(
  ({
    selectedTargets,
    selectedEquipments,
    selectedBodyParts,
    onFilterSelect,
  }: ExerciseListProps) => {
    const targetQuery = useExercisesByTarget(selectedTargets[0]);
    const equipmentQuery = useExercisesByEquipment(selectedEquipments[0]);
    const bodyPartQuery = useExercisesByBodyPart(selectedBodyParts[0]);
    const { isFavorite, toggleFavorite } = useFavorites();
    const {
      data: allExercises,
      isLoading: isLoadingAll,
      error,
    } = useExercises();
    const { width } = useWindowSize();
    const itemSize = width < 418 ? 190 : width < 768 ? 120 : 140;
  
    const activeQuery =
      selectedTargets.length === 1
        ? targetQuery
        : selectedEquipments.length === 1
        ? equipmentQuery
        : selectedBodyParts.length === 1
        ? bodyPartQuery
        : null;

    const data = activeQuery?.data ?? allExercises;
    const isLoading = activeQuery?.isLoading || isLoadingAll;

    const filteredExercises = useMemo(() => {
      if (!data) return [];
      return data.filter((exercise: Exercise) => {
        const targetMatch =
          selectedTargets.length === 0 ||
          selectedTargets.includes(exercise.target);
        const equipmentMatch =
          selectedEquipments.length === 0 ||
          selectedEquipments.includes(exercise.equipment);
        const bodyPartMatch =
          selectedBodyParts.length === 0 ||
          selectedBodyParts.includes(exercise.bodyPart);
        return targetMatch && equipmentMatch && bodyPartMatch;
      });
    }, [data, selectedTargets, selectedEquipments, selectedBodyParts]);

      if (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Egzersizler yüklenirken bir hata oluştu.";
      showError(message);
    }
    
    if (isLoading) return <Loading />;

    const Row = ({ index, style, data }: ListChildComponentProps) => {
      const exercise = data[index];
      return (
        <div style={style} className="px-2">
          <ExerciseCard
            exercise={exercise}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        </div>
      );
    };

    return (
      <div className="flex flex-col md:flex-row gap-6">
        <FilterBar
          selectedTargets={selectedTargets}
          selectedEquipments={selectedEquipments}
          selectedBodyParts={selectedBodyParts}
          onFilterSelect={onFilterSelect}
        />

        <div className="flex-1">
          {isLoading && <Loading />}

          {!isLoading && filteredExercises.length === 0 && <Loading />}

          {!isLoading && (
            <List
              height={800}
              itemCount={filteredExercises.length}
              itemSize={itemSize}
              width="100%"
              itemData={filteredExercises}
            >
              {Row}
            </List>
          )}
        </div>
      </div>
    );
  }
);
export default ExerciseList;
