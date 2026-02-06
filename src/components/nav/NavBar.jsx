import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import skull from "../../assets/skull.png";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-darkGreen border-mediumGreen fixed z-50 flex w-full border-b-3 py-2 font-bold">
      <div>
        <img src={skull} alt="Quest Hall Logo" className="logo-secondary" />
      </div>
      <div className="flex space-x-24 pt-2 pl-6">
        <div className="nav-link">
          <Link to="/library">Library</Link>
        </div>
        <div className="nav-link">
          <Link to="/taverns">Taverns</Link>
        </div>
        <div className="nav-link">
          <Link to="/addGame">Add Game</Link>
        </div>
      </div>
      <div>
        <button
          className="nav-link absolute right-4 pt-2"
          onClick={() => {
            localStorage.removeItem("QuestHall_user");
            navigate("/login", { replace: true });
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
