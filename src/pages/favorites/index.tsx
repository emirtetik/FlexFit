import { useFavorites } from "../../hooks/useFavorites";
import ExerciseCard from "../../components/Card/ExercisesCard";
import SEO from "../../components/Seo";

const FavoritesPage = () => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="text-gray-400 font-mont text-center  mt-10 text-lg">
        Hiç favori egzersiziniz yok.
      </div>
    );
  }

  return (
    <div className="md:max-w-10/12 max-w-3/4 md:mx-auto min-h-screen w-full px-4 mx-2 ">
       <SEO
        title="Favoriler"
        description="Favori Egzersizler"
        url="http://localhost:5173/favorites"
      />
      <h1 className="text-white text-2xl font-bebas mb-6">Favori Egzersizler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {favorites.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
