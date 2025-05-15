import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../constant/mainMenu";

interface SidebarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <div
        className={classNames(
          "fixed top-0 left-0 h-full w-3/4 max-w-xs bg-red-700 z-50 transform transition-transform duration-500 ease-in-out md:hidden",
          {
            "-translate-x-full": !isMenuOpen,
            "translate-x-0": isMenuOpen,
          }
        )}
      >
        <div className="flex flex-col items-start gap-4 p-6 pt-16">
          {mainMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              {({ isActive }) => (
                <span
                  className={classNames(
                    "block w-full text-sm font-mont px-2 py-3 text-gray-300 hover:text-white transition-colors",
                    { "text-white": isActive }
                  )}
                >
                  {item.title}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
