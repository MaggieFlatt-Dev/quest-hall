import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import dragonLogo from "../../assets/dragonLogo.png";
import mysticLogo from "../../assets/mysticLogo.png";
import toastedLogo from "../../assets/toastedLogo.png";
import { getTaverns } from "../services/tavernsServices";

export const Taverns = () => {
  const [taverns, setTaverns] = useState([]);

  const tavernLogos = {
    "The Dragon's Den": dragonLogo,
    "The Mystic Circle": mysticLogo,
    "The Toasted Tavern": toastedLogo,
  };

  useEffect(() => {
    getTaverns().then(setTaverns);
  }, []);

  return (
    <div className="bg-gray min-h-screen w-full py-15">
      <div className="flex justify-center pt-6">
        <img src={logo} alt="Quest Hall Logo" className="logo-primary" />
      </div>
      <div className="text-offWhite flex justify-center pt-15 text-3xl">
        Gather your fellowship - choose a tavern
      </div>
      <section className="flex flex-col items-center justify-center gap-10 pt-8 md:flex-row">
        {taverns.map((tavern) => {
          return (
            <Link key={tavern.id} to={`/taverns/${tavern.id}`}>
              <button className="btn-tavern flex flex-col items-center gap-2">
                <img
                  src={tavernLogos[tavern.name]}
                  alt={tavern.name}
                  className="h-32 w-32"
                />
                {tavern.name}
              </button>
            </Link>
          );
        })}
      </section>
    </div>
  );
};
