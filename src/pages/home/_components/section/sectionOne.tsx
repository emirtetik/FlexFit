import { Suspense, useCallback, useState } from "react";
import { Loading } from "../../../../components/Loading";
import React from "react";
const ExerciseList = React.lazy(() => import("../../../../components/List/ExersicesList"));
const SectionOne = () => {
  const [selectedTargets, setSelectedTargets] = useState<string[]>([]);
  const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);
  const [selectedBodyParts, setSelectedBodyParts] = useState<string[]>([]);

  const handleFilterSelect = useCallback(
    (type: "target" | "equipment" | "bodyPart", value: string) => {
      if (type === "target") {
        setSelectedTargets((prev) => (prev.includes(value) ? [] : [value]));
        setSelectedEquipments([]);
        setSelectedBodyParts([]);
      } else if (type === "equipment") {
        setSelectedTargets([]);
        setSelectedEquipments((prev) => (prev.includes(value) ? [] : [value]));
        setSelectedBodyParts([]);
      } else if (type === "bodyPart") {
        setSelectedTargets([]);
        setSelectedEquipments([]);
        setSelectedBodyParts((prev) => (prev.includes(value) ? [] : [value]));
      }
    },
    []
  );
  return (
    <div className="px-0 py-0 md:px-4 md:py-8 min-[481px]:max-w-7/12 md:max-w-10/12 md:mx-auto ml-4 mr-16">
      <Suspense fallback={<Loading />}>
        <ExerciseList
          selectedTargets={selectedTargets}
          selectedEquipments={selectedEquipments}
          selectedBodyParts={selectedBodyParts}
          onFilterSelect={handleFilterSelect}
        />
      </Suspense>
    </div>
  );
};

export default SectionOne;
