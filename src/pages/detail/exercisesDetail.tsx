import { useParams } from "react-router-dom";
import { useExerciseById } from "../../hooks/useFilter";
import { Loading } from "../../components/Loading";
import SEO from "../../components/Seo";
import { useFavorites } from "../../hooks/useFavorites";
import Button from "../../components/ui/Button";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { showError } from "../../lib/toastify";

const ExercisesDetail = () => {
  const { name = "" } = useParams();
  const parts = name.split("-");
  const id = parts[parts.length - 1];

  const { data: exercise, isLoading, error } = useExerciseById(id ?? "");

  const { isFavorite, toggleFavorite } = useFavorites();

  if (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Egzersizler yüklenirken bir hata oluştu.";
    showError(message);
  }

  if (isLoading) return <Loading />;

  if (!exercise)
    return (
      <div className="text-white p-6 text-center text-lg font-mont">
        Egzersiz bulunamadı.
      </div>
    );

  return (
    <div className="text-white space-y-6 px-4 sm:px-6 md:px-10 max-w-[1100px] mx-auto relative">
      <SEO
        title={exercise.name}
        description="Gücünü esnekliğe dönüştür."
        url={`http://localhost:5173/${exercise.name}`}
      />

      <Button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(exercise);
        }}
        variant="ghost"
        className="absolute top-4 right-65 md:top-4 md:right-10  cursor-pointer"
      >
        {isFavorite(exercise) ? (
          <BsBookmarkFill className="text-white text-xl" />
        ) : (
          <BsBookmark className="text-white text-xl" />
        )}
      </Button>

      <div className="text-center space-y-2">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold capitalize font-bebas">
          {exercise.name}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {exercise.gifUrl && (
          <div className="flex px-10 md:px-0 md:justify-center">
            <img
              src={exercise.gifUrl}
              alt={exercise.name}
              className="rounded-2xl shadow-lg w-full max-w-[150px] sm:max-w-[400px] md:max-w-sm object-cover"
            />
          </div>
        )}

        <div className="space-y-2 md:space-y-4 text-sm sm:text-base md:w-full w-3/4 break-words">
          {exercise.target && (
            <div className="bg-third p-4 rounded-xl shadow">
              <strong className="text-orange">Hedef Kas:</strong>{" "}
              {exercise.target}
            </div>
          )}

          {exercise.equipment && (
            <div className="bg-third p-4 rounded-xl shadow">
              <strong className="text-orange">Ekipman:</strong>{" "}
              {exercise.equipment}
            </div>
          )}

          {exercise.bodyPart && (
            <div className="bg-third p-4 rounded-xl shadow">
              <strong className="text-orange">Çalışan Bölge:</strong>{" "}
              {exercise.bodyPart}
            </div>
          )}

          {exercise.secondaryMuscles?.length > 0 && (
            <div className="bg-third p-4 rounded-xl shadow">
              <strong className="text-orange">İkincil Kaslar:</strong>
              <ul className="list-disc list-inside ml-2 mt-1">
                {exercise.secondaryMuscles.map((muscle, idx) => (
                  <li key={idx}>{muscle}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {exercise.instructions?.length > 0 && (
        <div className="bg-third p-4 sm:p-6 rounded-2xl shadow-md md:w-full w-3/4">
          <h2 className="text-xl sm:text-2xl font-mont-semi mb-4 text-orange">
            Egzersiz Talimatları
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base leading-relaxed">
            {exercise.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default ExercisesDetail;
