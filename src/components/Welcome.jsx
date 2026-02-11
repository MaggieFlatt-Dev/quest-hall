import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Welcome = () => {
  //return two buttons. One to user library (aka games) and the other to Taverns - link when you get to stretch goal
  return (
    <div className="bg-gray min-h-screen w-full">
      <div className="flex justify-center pt-6">
        <img src={logo} alt="Quest Hall Logo" className="logo-primary" />
      </div>
      <section className="flex flex-col items-center justify-center gap-10 pt-15 md:flex-row">
        <Link to={"/games"}>
          <button className="btn-secondary bg-darkGreen hover:bg-mediumGreen">
            Your Library
          </button>
        </Link>
        <button className="btn-secondary bg-darkGreen hover:bg-mediumGreen">
          Taverns
        </button>
      </section>
    </div>
  );
};
