import { useLocalStorage } from "react-use";
import type { Exercise } from "../types";
import { showError, showSuccess } from "../lib/toastify";

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<Exercise[]>(
    "favorites",
    []
  );

 const isFavorite = (exercise: Exercise): boolean => {
  return !!favorites?.some((ex) => ex.id === exercise.id);
};

  const addFavorite = (exercise: Exercise) => {
    if (!isFavorite(exercise)) {
      setFavorites([...(favorites || []), exercise]);
      showSuccess(`${exercise.name} favorilere eklendi.`)
    }
  };

  const removeFavorite = (exercise: Exercise) => {
    setFavorites(favorites?.filter((ex) => ex.id !== exercise.id) || []);
    showError(`${exercise.name} favorilerden kaldırıldı.`)
  };

  const toggleFavorite = (exercise: Exercise) => {
    if (isFavorite(exercise)) {
      removeFavorite(exercise);
    } else {
      addFavorite(exercise);
    }
  };
  return {
    favorites: favorites || [],
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };
};
