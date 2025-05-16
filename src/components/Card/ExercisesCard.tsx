import type { FC } from "react";

type ExerciseCardProps = {
  name: string;
  target: string;
  equipment: string;
  gifUrl: string;
};

const ExerciseCard: FC<ExerciseCardProps> = ({ name, target, equipment, gifUrl }) => {
  return (
    <div className="max-w-sm  rounded-lg bg-primary shadow-md overflow-hidden  hover:shadow-2xl transition cursor-pointer">
      <img
        src={gifUrl}
        alt={name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-sm font-mont mb-2 text-white ">{name}</h3>
        <p className="text-white text-xs mb-1 font-mont-medium">
          <strong>Hedef Kas:</strong> {target}
        </p>
        <p className="text-white text-xs font-mont-medium">
          <strong>Ekipman:</strong> {equipment}
        </p>
      </div>
    </div>
  );
};

export default ExerciseCard;
