import type { FC } from "react";
import { Link } from "react-router-dom";
import { slugify } from "../../lib/slugify";
import type { Exercise } from "../../types";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import Button from "../ui/Button";

type Props = {
  exercise: Exercise;
  isFavorite: (exercise: Exercise) => boolean;
  toggleFavorite: (exercise: Exercise) => void;
};

const ExerciseCard: FC<Props> = ({ exercise, isFavorite, toggleFavorite }) => {
  const { id, name, target, equipment, gifUrl } = exercise;
  const slug = `${slugify(name)}-${id}`;

  return (
    <div className="w-full md:max-w-md   min-[481px]:mx-auto rounded-lg bg-third shadow-md overflow-hidden cursor-pointer border border-white mb-4">
      <div className="flex flex-col sm:flex-row relative">
        <Link to={`/exercises/${slug}`} className="flex flex-col min-[481px]:flex-row w-full"
>
          <img
            src={gifUrl}
            alt={name}
            className="w-20 h-20 min-[481px]:w-24 min-[481px]:h-24 md:w-32 md:h-32 object-cover p-2 rounded-2xl self-center md:self-auto"
            loading="lazy"
          />
          <div className="p-4 flex flex-col justify-center">
            <h3 className="text-[9px] md:text-base font-mont-semi mb-2 text-white capitalize">{name}</h3>
            <p className="text-white text-[9px] md:text-xs mb-1 font-mont-medium">
              <span className="text-gray-400">Hedef:</span> {target}
            </p>
            <p className="text-white text-[9px] md:text-xs font-mont-medium">
              <span className="text-gray-400">Ekipman:</span> {equipment}
            </p>
          </div>
        </Link>

        <Button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(exercise);
          }}
          variant="ghost"
          className="absolute top-2 right-2 z-10"
        >
          {isFavorite(exercise) ? (
            <BsBookmarkFill className="text-white" />
          ) : (
            <BsBookmark className="text-white" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default ExerciseCard;
