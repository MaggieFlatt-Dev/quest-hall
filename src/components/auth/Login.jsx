import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../services/userServices";

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

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-charcoal">
      <section className="w-full max-w-md">
        <form
          className="border-2 border-gold rounded-lg p-8 bg-iron shadow-lg"
          onSubmit={handleLogin}
        >
          <h1 className="font-serif text-5xl text-gold text-center mb-2">
            Quest Hall
          </h1>
          <h2 className="font-serif text-center text-parchment text-lg mb-8">
            Please sign in
          </h2>
          <fieldset className="mb-6">
            <label className="font-serif text-gold block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              className="w-full font-serif px-4 py-2 border-2 border-gold rounded bg-cream text-charcoal focus:outline-none focus:border-rust placeholder-stone"
              placeholder="Email address"
              required
              autoFocus
            />
          </fieldset>
          <fieldset className="mb-6">
            <button
              className="w-full font-serif py-3 px-4 bg-[#B7410E] text-[#F5F1E8] border-2 border-[#B7410E] rounded-md hover:bg-[#8B0000] hover:border-[#8B0000] transition duration-200 font-bold text-lg"
              type="submit"
            >
              Sign In
            </button>
          </fieldset>
          <div className="text-center">
            <p className="font-serif text-parchment">
              Not a member yet?{" "}
              <Link
                to="/register"
                className="text-gold hover:text-[#B7410E] transition duration-200 font-bold underline"
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
