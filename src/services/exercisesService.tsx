import { BaseService } from "./BaseService";

export const ExercisesService = {
  getExercises: async () => {
    const data = await BaseService.get("exercises");
    console.log(data);
    return data;
  },
};
