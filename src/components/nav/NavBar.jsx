import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import skull from "../../assets/skull.png";
import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-darkGreen border-mediumGreen fixed z-50 w-full border-b-4 py-2 font-bold">
      <div className="flex items-center justify-between justify-start gap-8 px-4">
        {/* Logo */}
        <div>
          <img src={skull} alt="Quest Hall Logo" className="logo-secondary" />
        </div>

        {/* Hamburger Button (mobile only) */}
        <button
          className="text-offWhite text-2xl md:hidden"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <div className="hidden space-x-24 pt-2 pl-6 md:flex">
          <div className="nav-link">
            <Link to="/games">Library</Link>
          </div>
          <div className="nav-link">
            <Link to="/taverns">Taverns</Link>
          </div>
          <div className="nav-link">
            <Link to="/addGame">Add Game</Link>
          </div>
        </div>

        {/* Logout (desktop) - pushed to the right */}
        <button
          className="nav-link ml-auto hidden md:block"
          onClick={() => {
            localStorage.removeItem("QuestHall_user");
            navigate("/login", { replace: true });
          }}
        >
          Logout
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-darkGreen border-mediumGreen border-t md:hidden">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/games" className="nav-link" onClick={closeMenu}>
              Library
            </Link>
            <Link to="/taverns" className="nav-link" onClick={closeMenu}>
              Taverns
            </Link>
            <Link to="/addGame" className="nav-link" onClick={closeMenu}>
              Add Game
            </Link>
            <button
              className="nav-link text-left"
              onClick={() => {
                localStorage.removeItem("QuestHall_user");
                navigate("/login", { replace: true });
                closeMenu();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
