import { useQuery } from "@tanstack/react-query";
import { ExercisesService } from "../services/exercisesService";

export const useEquipments = () =>
  useQuery({
    queryKey: ['exercises', 'equipmentList'],
    queryFn: ExercisesService.list.equipment,
  });
