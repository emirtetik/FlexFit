import { useBodyParts } from "../../hooks/useBodyParts";
import { useEquipments } from "../../hooks/useEquipment";
import { useTargets } from "../../hooks/useTargets";

type FilterBarProps = {
  filters: {
    equipment: string;
    target: string;
    bodyPart: string;
  };
  onChange: (filters: { equipment: string; target: string; bodyPart: string }) => void;
};

export const FilterBar = ({ filters, onChange }: FilterBarProps) => {
  const { data: equipments } = useEquipments();
  const { data: targets } = useTargets();
  const { data: bodyParts } = useBodyParts();

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <select
        value={filters.equipment}
        onChange={(e) => onChange({ ...filters, equipment: e.target.value })}
        className="p-2 border rounded"
      >
        <option value="">Tüm Ekipmanlar</option>
        {equipments?.map((eq: string) => (
          <option key={eq} value={eq}>
            {eq}
          </option>
        ))}
      </select>

      <select
        value={filters.bodyPart}
        onChange={(e) => onChange({ ...filters, bodyPart: e.target.value })}
        className="p-2 border rounded"
      >
        <option value="">Tüm Kas Grupları</option>
        {bodyParts?.map((bp: string) => (
          <option key={bp} value={bp}>
            {bp}
          </option>
        ))}
      </select>

      <select
        value={filters.target}
        onChange={(e) => onChange({ ...filters, target: e.target.value })}
        className="p-2 border rounded"
      >
        <option value="">Tüm Hedefler</option>
        {targets?.map((target: string) => (
          <option key={target} value={target}>
            {target}
          </option>
        ))}
      </select>
    </div>
  );
};
