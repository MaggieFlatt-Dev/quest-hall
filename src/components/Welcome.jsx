import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Welcome = () => {
  return (
    <main className="bg-gray min-h-screen w-full">
      <div className="flex justify-center pt-6">
        <img src={logo} alt="Quest Hall Logo" className="logo-primary" />
      </div>
      <section className="flex flex-col items-center justify-center gap-10 pt-15 md:flex-row">
        <Link to={"/library"}>
          <button className="btn-secondary bg-darkGreen hover:bg-mediumGreen">
            Your Library
          </button>
        </Link>
        <button className="btn-secondary bg-darkGreen hover:bg-mediumGreen">
          Taverns
        </button>
      </section>
    </main>
  );
};
