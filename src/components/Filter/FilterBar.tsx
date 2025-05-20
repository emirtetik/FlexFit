import { useState } from "react";
import {
  useBodyParts,
  useEquipments,
  useTargets,
} from "../../hooks/useExercises";
import { SearchInput } from "../Search/SearchInput";
import { FilterGroup } from "./FilterGroup";
import { showError } from "../../lib/toastify";

interface FilterBarProps {
  selectedTargets: string[];
  selectedEquipments: string[];
  selectedBodyParts: string[];
  onFilterSelect: (
    type: "target" | "equipment" | "bodyPart",
    value: string
  ) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedTargets,
  selectedEquipments,
  selectedBodyParts,
  onFilterSelect,
}) => {
  const { data: targets, error: errorTargets } = useTargets();
  const { data: equipments, error: errorEquipment } = useEquipments();
  const { data: bodyParts, error: errorBody } = useBodyParts();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState("");

   if (errorTargets || errorBody || errorEquipment) {
  const error = errorTargets || errorBody || errorEquipment;

  const message =  
    error instanceof Error
      ? error.message
      : "Egzersizler yüklenirken bir hata oluştu.";

  showError(message);
}

  const filterList = (list: string[] | undefined) =>
    list?.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];
  const toggleGroup = (key: string) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
      <div className="p-2 md:p-4 bg-transparent border border-primary rounded-xl space-y-4 w-full md:max-w-xs ">

      <SearchInput
        name="search"
        placeholder="Filtrele..."
        onSearch={setSearchTerm}
      />

      <FilterGroup
        title="Muscle Group"
        options={filterList(targets)}
        selected={selectedTargets}
        isOpen={openGroups["target"]}
        onToggleOpen={() => toggleGroup("target")}
        onToggle={(val) => onFilterSelect("target", val)}
      />

      <FilterGroup
        title="Equipment Group"
        options={filterList(equipments)}
        selected={selectedEquipments}
        isOpen={openGroups["equipment"]}
        onToggleOpen={() => toggleGroup("equipment")}
        onToggle={(val) => onFilterSelect("equipment", val)}
      />

      <FilterGroup
        title="Body Group"
        options={filterList(bodyParts)}
        selected={selectedBodyParts}
        isOpen={openGroups["bodyPart"]}
        onToggleOpen={() => toggleGroup("bodyPart")}
        onToggle={(val) => onFilterSelect("bodyPart", val)}
      />
    </div>
  );
};
