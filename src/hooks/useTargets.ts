import { useQuery } from '@tanstack/react-query';
import { ExercisesService } from '../services/exercisesService';

export const useTargets = () =>
  useQuery({
    queryKey: ['exercises', 'targetList'],
    queryFn: ExercisesService.list.targets,
  });
