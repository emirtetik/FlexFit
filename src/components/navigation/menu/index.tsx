import { NavLink } from "react-router-dom";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import classNames from "classnames";
import { mainMenu } from "../../../constant/mainMenu";
import Sidebar from "../sidebar";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="hidden md:flex flex-grow justify-end ">
        {mainMenu.map((item, index) => (
          <NavLink key={index} to={item.path} className="mx-3">
            {({ isActive }) => (
              <span
                className={classNames(
                  "text-primary hover:text-secondary font-mont text-xs transition-colors",
                  { "text-secondary": isActive }
                )}
              >
                {item.title}
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* sidebar button */}
      <div className="md:hidden ml-auto">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? (
            <RiMenuUnfoldLine className="w-6 h-6 text-white" />
          ) : (
            <RiMenuFoldLine className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Menu;
