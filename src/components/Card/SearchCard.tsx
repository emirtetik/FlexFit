import { useState } from "react";
import { useExercisesByName } from "../../hooks/useFilter";
import { SearchInput } from "../Search/SearchInput";
import { SearchModal } from "../Modal/SearchModal";

const SearchCard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: exercises, isFetching } = useExercisesByName(searchTerm);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

   const handleSelectExercise = () => {
    setSearchTerm("");
  };

  return (
    <div className="relative w-full max-w-xs mx-auto">
      <SearchInput onSearch={handleSearch} />
      {searchTerm && (
        <SearchModal
          exercises={exercises}
          loading={isFetching}
          onSelect={handleSelectExercise}
        />
      )}
    </div>
  );
};

export default SearchCard;
