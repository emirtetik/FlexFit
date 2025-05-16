import type { FC } from "react";
import type { Exercise } from "../../types";
import { Loading } from "../Loading";

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
    <div className="absolute top-full mt-2 max-h-80 overflow-y-auto w-full bg-background border border-gray-300 rounded-xl shadow-lg p-2 space-y-2 z-50">
      {loading && (
        <div className="flex justify-center items-center p-4">
          <Loading />
        </div>
      )}

      {!loading && exercises?.length === 0 && (
        <div className="p-3 text-center text-gray-500">Sonuç bulunamadı</div>
      )}

      {!loading &&
        exercises?.map((ex) => (
          <div
            key={ex.id}
            onClick={() => onSelect(ex)}
            className="flex items-center gap-4 p-3 bg-white  border border-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer transition"
          >
            <img
              src={ex.gifUrl}
              alt={ex.name}
              className="w-16 h-16 rounded-md border border-gray-300 object-cover"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-mont-semi text-sm text-black capitalize">
                {ex.name}
              </h4>
              <div className="text-xs text-gray-500">
                Hedef: <span className="font-mont-medium text-gray-700">{ex.target}</span>
              </div>
              <div className="text-xs text-gray-500 ">
                Ekipman: <span className="text-gray-700 font-mont-medium">{ex.equipment}</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-1 font-mont">
                <span className="text-xs px-2 py-0.5 bg-secondary text-white rounded-full">
                  {ex.bodyPart}
                </span>
                <span className="text-xs px-2 py-0.5 bg-primary text-white rounded-full">
                  {ex.target}
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
