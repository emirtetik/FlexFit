import { useQuery } from "@tanstack/react-query";
import { ExercisesService } from "../services/exercisesService";

export const useExercises = () =>
  useQuery({
    queryKey: ["exercises"],
    queryFn: ExercisesService.list.all,
    staleTime: 1000 * 60 * 10,     
  });

export const useTargets = () =>
  useQuery({
    queryKey: ['exercises', 'targetList'],
    queryFn: ExercisesService.list.targets,
  });

export const useEquipments = () =>
  useQuery({
    queryKey: ['exercises', 'equipmentList'],
    queryFn: ExercisesService.list.equipment,
  });

export const useBodyParts = () =>
  useQuery({
    queryKey: ['exercises', 'bodyParts'],
    queryFn: ExercisesService.list.bodyParts,
  });
