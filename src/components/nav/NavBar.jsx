import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import skull from "../../assets/skull.png";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
  <div className="bg-[#1a472a] text-[#d3d3d3] fixed flex w-screen border-b-3 border-[#2d5a3d] py-2 font-bold">
      <div>
        <img src={skull} alt="Quest Hall Logo" className="logo-secondary" />
      </div>
      <div className="flex space-x-24 pt-2 pl-6">
        <div className="transition duration-200 p-1 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/60 hover:bg-[#2d5a3d]">
          <Link to="/library">Library</Link>
        </div>
        <div className="transition duration-200 p-1 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/60 hover:bg-[#2d5a3d]">
          <Link to="/taverns">Taverns</Link>
        </div>
        <div className="transition duration-200 p-1 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/60 hover:bg-[#2d5a3d]">
          <Link to="/addGame">Add Game</Link>
        </div>
      </div>
      <div>
        <button
          className="absolute right-4 pt-2 transition duration-200 p-1 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/60 hover:bg-[#2d5a3d]"
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
