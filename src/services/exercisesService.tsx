import { BaseService } from "./BaseService";

export const ExercisesService = {
  list: {
    all: async () => BaseService.get("exercises"),
    bodyParts: async () => BaseService.get("exercises/bodyPartList"),
    equipment: async () => BaseService.get("exercises/equipmentList"),
    targets: async () => BaseService.get("exercises/targetList"),
  },

  filter: {
    byEquipment: async (equipmentType: string) =>
      BaseService.get(`exercises/equipment/${encodeURIComponent(equipmentType)}`),

    byTarget: async (target: string) =>
      BaseService.get(`exercises/target/${encodeURIComponent(target)}`),

    byName: async (name: string) =>
      BaseService.get(`exercises/name/${encodeURIComponent(name)}`),
  },

  detail: {
    byId: async (id: string) =>
      BaseService.get(`exercises/exercise/${encodeURIComponent(id)}`),
  },
};
