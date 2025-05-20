import type { FC } from "react";
import type { Exercise } from "../../types";
import { Loading } from "../Loading";
import { slugify } from "../../lib/slugify";
import { Link } from "react-router-dom";

type SearchModalProps = {
  exercises: Exercise[] | undefined;
  loading: boolean;
  onSelect: (exercise: Exercise) => void;
};

export const SearchModal: FC<SearchModalProps> = ({
  exercises,
  loading,
  onSelect,
}) => {
  return (
    <div
      className="
        absolute top-full mt-2
        w-full
        max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl
        max-h-72 sm:max-h-80 md:max-h-[25rem]
        overflow-y-auto
        bg-background border border-gray-300 rounded-xl shadow-lg
        p-3 sm:p-4
        space-y-3
        z-50
      "
    >
      {loading && (
        <div className="flex justify-center items-center p-6">
          <Loading />
        </div>
      )}

      {!loading && exercises?.length === 0 && (
        <div className="p-4 text-center font-mont-medium text-gray-500 text-xs sm:text-sm">
          Sonuç bulunamadı
        </div>
      )}

      {!loading &&
        exercises?.map((ex) => {
          const slug = `${slugify(ex.name)}-${ex.id}`;
          return (
            <div className="font-mont" key={ex.id}>
              <Link to={`/exercises/${slug}`}>
                <div
                  onClick={() => onSelect(ex)}
  className="
    flex flex-col sm:flex-row items-center gap-4 p-3
    bg-white border border-gray-200 rounded-lg
    cursor-pointer transition
    hover:bg-gray-100
    sm:hover:bg-gray-200
    active:bg-gray-300
    select-none
  "
>
  <img
    src={ex.gifUrl}
    alt={ex.name}
    className="
      w-14 h-14 sm:w-16 sm:h-16
      rounded-md border border-gray-300 object-cover
      flex-shrink-0
    "
  />
  <div className="flex flex-col gap-1 min-w-0 flex-1">
  <h4 className="line-clamp-2 text-xs sm:text-base font-mont-semi text-black capitalize">
  {ex.name}
</h4>

    <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
      <span className="font-mont-medium text-gray-700">{ex.target}</span>
    </div>
    <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
      <span className="text-gray-700 font-mont-medium">{ex.equipment}</span>
    </div>
    <div className="mt-1 flex flex-wrap gap-1 font-mont">
      <span className="text-xs sm:text-sm px-2 py-0.5 bg-secondary text-white rounded-full max-w-full truncate">
        {ex.bodyPart}
      </span>
      <span className="text-xs sm:text-sm px-2 py-0.5 bg-primary text-white rounded-full max-w-full truncate">
        {ex.target}
      </span>
    </div>
  </div>
</div>

              </Link>
            </div>
          );
        })}
    </div>
  );
};
