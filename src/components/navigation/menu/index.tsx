import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import classNames from "classnames";
import { mainMenu } from "../../../constant/mainMenu";
import Sidebar from "../sidebar";
import Button from "../../ui/Button";

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
      <div className="hidden md:flex flex-grow justify-end  ">
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

      <div className="md:hidden md:ml-auto ml-0">
        <Button
          onClick={toggleMenu}
          variant="ghost"
          className="cursor-pointer"
        >
          {isMenuOpen ? (
            <IoMdClose className="w-6 h-6 text-white" />
          ) : (
            <IoMenu className="w-6 h-6 text-white" />
          )}
        </Button>
      </div>
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Menu;
