import { useQuery } from '@tanstack/react-query';
import { ExercisesService } from '../services/exercisesService';

export const useExercises = () => {
  return useQuery({
    queryKey: ['exercises'],
    queryFn: ExercisesService.getExercises,
  });
};
