import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import Button from "../ui/Button";

interface FilterGroupProps {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  options,
  selected,
  onToggle,
  onToggleOpen,
  isOpen,
}) => {
  return (
    <div>
      <Button
        onClick={onToggleOpen}
        fullWidth
        textAlign="left"
        variant="ghost"
        className="justify-between text-white cursor-pointer"
      >
        {title}
        {isOpen ? <FiChevronDown /> : <FiChevronRight />}
      </Button>

      {isOpen && (
        <div className="mt-2 max-h-52 overflow-auto mx-5">
          {options.map((option) => {
            const isChecked = selected.includes(option);
            return (
              <div key={option} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  id={`${title}-${option}`}
                  checked={isChecked}
                  onChange={() => onToggle(option)}
                  className="hidden"
                />
                <label
                  htmlFor={`${title}-${option}`}
                  className="cursor-pointer md:text-xl text-xs flex items-center space-x-2"
                >
                  <div
                    className={`w-3 h-3 border rounded-sm flex items-center justify-center ${
                      isChecked ? "border-secondary" : "border-gray-500"
                    }`}
                  >
                    {isChecked && (
                      <FaCheck className="text-secondary w-2 h-2" />
                    )}
                  </div>
                  <span
                    className={`md:text-sm text-xs leading-none mb-0.5 ${
                      isChecked ? "text-secondary" : "text-white"
                    }`}
                  >
                    {option}
                  </span>
                </label>
              </div>
            );
          })}
          {options.length === 0 && (
            <div className="text-xs text-gray-400 font-mont">
              Arama sonucu yok
            </div>
          )}
        </div>
      )}
    </div>
  );
};
