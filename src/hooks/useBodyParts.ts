import { useQuery } from '@tanstack/react-query';
import { ExercisesService } from '../services/exercisesService';

export const useBodyParts = () =>
  useQuery({
    queryKey: ['exercises', 'bodyParts'],
    queryFn: ExercisesService.list.bodyParts,
  });
