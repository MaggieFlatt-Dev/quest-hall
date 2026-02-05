import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../services/userServices";
import logo from "../../assets/logo.png";

export const Login = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "QuestHall_user",
          JSON.stringify({
            id: user.id,
          }),
        );

        navigate("/welcome");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="bg-charcoal flex min-h-screen items-center justify-center">
      <section className="w-full max-w-md">
        <form
          className="border-gold bg-iron rounded-lg border-2 p-8 shadow-lg"
          onSubmit={handleLogin}
        >
          <img
            src={logo}
            alt="Quest Hall Logo"
            className="logo-primary mx-auto"
          />
          <h2 className="text-parchment mb-8 text-center font-serif text-lg">
            Please sign in
          </h2>
          <fieldset className="mb-6">
            <label className="text-gold mb-2 block font-serif">Email</label>
            <input
              type="email"
              value={email ?? ""}
              onChange={(evt) => setEmail(evt.target.value)}
              className="input-primary"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset className="mb-6">
            <button className="btn-primary" type="submit">
              Start Your Adventure
            </button>
          </fieldset>
          <div className="text-center">
            <p className="text-parchment font-serif">
              Not a member yet?{" "}
              <Link
                to="/register"
                className="text-gold font-bold underline transition duration-200 hover:text-[#B7410E]"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};
