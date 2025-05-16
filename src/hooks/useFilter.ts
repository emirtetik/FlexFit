import { useQuery } from "@tanstack/react-query";
import { ExercisesService } from "../services/exercisesService";

export const useExercisesByEquipment = (equipmentType: string) =>
  useQuery({
    queryKey: ['exercises', 'byEquipment', equipmentType],
    queryFn: () => ExercisesService.filter.byEquipment(equipmentType),
    enabled: !!equipmentType,
  });

export const useExercisesByTarget = (target: string) =>
  useQuery({
    queryKey: ['exercises', 'byTarget', target],
    queryFn: () => ExercisesService.filter.byTarget(target),
    enabled: !!target,
  });

export const useExercisesByName = (name: string) =>
  useQuery({
    queryKey: ['exercises', 'byName', name],
    queryFn: () => ExercisesService.filter.byName(name),
    enabled: !!name,
  });
