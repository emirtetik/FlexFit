import { useState } from "react";
import Logo from "../../Logo";
import Menu from "../menu";
import SearchCard from "../../Card/SearchCard";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-10 bg-transparent z-50">
      <Logo />

      <div className="absolute left-1/2 transform -translate-x-1/2 w-2/3 max-w-sm">
        <SearchCard />
      </div>

      <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
