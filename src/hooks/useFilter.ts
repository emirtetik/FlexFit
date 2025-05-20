import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ExercisesService } from "../services/exercisesService";
import type { Exercise } from "../types";

export const useExercisesByEquipment = (equipmentType: string) =>
  useQuery<Exercise[]>({
    queryKey: ['exercises', 'byEquipment', equipmentType],
    queryFn: () => ExercisesService.filter.byEquipment(equipmentType),
    enabled: !!equipmentType,
    placeholderData: keepPreviousData,
  });

export const useExercisesByTarget = (target: string) =>
  useQuery<Exercise[]>({
    queryKey: ['exercises', 'byTarget', target],
    queryFn: () => ExercisesService.filter.byTarget(target),
    enabled: !!target,
    placeholderData: keepPreviousData,
  });

export const useExercisesByBodyPart = (bodyPart: string) =>
  useQuery<Exercise[]>({
    queryKey: ['exercises', 'byBodyPart', bodyPart],
    queryFn: () => ExercisesService.filter.byBodyPart(bodyPart),
    enabled: !!bodyPart,
    placeholderData: keepPreviousData,
  });

export const useExercisesByName = (name: string) =>
  useQuery<Exercise[]>({
    queryKey: ['exercises', 'byName', name],
    queryFn: () => ExercisesService.filter.byName(name),
    enabled: !!name,
    placeholderData: keepPreviousData,
  });

export const useExerciseById = (id: string) =>
  useQuery<Exercise>({
    queryKey: ["exercises", "byId", id],
    queryFn: () => ExercisesService.detail.byId(id),
    enabled: !!id,
    placeholderData: keepPreviousData,
  });