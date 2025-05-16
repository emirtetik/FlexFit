import { useState } from "react";
import { useExercises } from "../../hooks/useExercises";
import { useExercisesByEquipment } from "../../hooks/useFilter";
import type { Exercise } from "../../types";
import ExerciseCard from "../Card/ExercisesCard";
import { FilterBar } from "../Filter/FilterBar";

export const ExerciseList = () => {
  const [filters, setFilters] = useState({
    equipment: "",
    target: "",
    bodyPart: "",
  });

  const { data: allExercises = [], isLoading } = useExercises();
  const { data: equipmentExercises } = useExercisesByEquipment(
    filters.equipment
  );

  let filtered = filters.equipment ? equipmentExercises || [] : allExercises;

  if (filters.target) {
    filtered = filtered.filter((ex: Exercise) => ex.target === filters.target);
  }

  if (filters.bodyPart) {
    filtered = filtered.filter(
      (ex: Exercise) => ex.bodyPart === filters.bodyPart
    );
  }

  return (
    <div>
      <FilterBar filters={filters} onChange={setFilters} />

      {isLoading ? (
        <p>Yükleniyor...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((exercise: Exercise) => (
            <ExerciseCard key={exercise.id} {...exercise} />
          ))}
        </div>
      )}
    </div>
  );
};
