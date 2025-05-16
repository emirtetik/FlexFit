import { useQuery } from "@tanstack/react-query";
import { ExercisesService } from "../services/exercisesService";

export const useExercises = () =>
  useQuery({
    queryKey: ["exercises"],
    queryFn: ExercisesService.list.all,
    staleTime: 1000 * 60 * 10,     
  });

export const useExerciseById = (id: string) =>
  useQuery({
    queryKey: ["exercises", "byId", id],
    queryFn: () => ExercisesService.detail.byId(id),
    enabled: !!id,
  });
