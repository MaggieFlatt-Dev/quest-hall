import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, getUserByEmail } from "../services/userServices";
import { getUserByUsername } from "../services/userServices";

export const Register = (props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });
  let navigate = useNavigate();

  const registerNewUser = () => {
    createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "QuestHall_user",
          JSON.stringify({
            id: createdUser.id,
          }),
        );

        navigate("/");
      }
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    //Check for duplicate email
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email? No good.
        window.alert("Account with that email address already exists");
      } else {
        //Check for duplicate userName
        getUserByUsername(user.username).then((usernameResponse) => {
          if (usernameResponse.length > 0) {
            window.alert("Username already taken");
          } else {
            // Good email and username? Create user.
            registerNewUser();
          }
        });
      }
    });
  };
  const updateUser = (evt) => {
    const copy = { ...user };
    copy[evt.target.id] = evt.target.value;
    setUser(copy);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-charcoal">
      <section className="w-full max-w-md">
        <form
          className="border-2 border-gold rounded-lg p-8 bg-iron shadow-lg"
          onSubmit={handleRegister}
        >
          <h1 className="font-serif text-5xl text-gold text-center mb-2">
            Quest Hall
          </h1>
          <h2 className="font-serif text-center text-parchment text-lg mb-8">
            Create Your Account
          </h2>

          <fieldset className="mb-4">
            <div className="form-group">
              <input
                onChange={updateUser}
                type="text"
                id="firstName"
                className="w-full font-serif px-4 py-2 border-2 border-gold rounded bg-cream text-charcoal focus:outline-none focus:border-rust placeholder-stone"
                placeholder="First name"
                required
                autoFocus
              />
            </div>
          </fieldset>

          <fieldset className="mb-4">
            <div className="form-group">
              <input
                onChange={updateUser}
                type="text"
                id="lastName"
                className="w-full font-serif px-4 py-2 border-2 border-gold rounded bg-cream text-charcoal focus:outline-none focus:border-rust placeholder-stone"
                placeholder="Last name"
                required
              />
            </div>
          </fieldset>

          <fieldset className="mb-4">
            <div className="form-group">
              <input
                onChange={updateUser}
                type="text"
                id="username"
                className="w-full font-serif px-4 py-2 border-2 border-gold rounded bg-cream text-charcoal focus:outline-none focus:border-rust placeholder-stone"
                placeholder="Create Username"
                required
              />
            </div>
          </fieldset>

          <fieldset className="mb-6">
            <div className="form-group">
              <input
                onChange={updateUser}
                type="email"
                id="email"
                className="w-full font-serif px-4 py-2 border-2 border-gold rounded bg-cream text-charcoal focus:outline-none focus:border-rust placeholder-stone"
                placeholder="Email address"
                required
              />
            </div>
          </fieldset>

          <fieldset className="mb-6">
            <div className="form-group">
              <button
                className="w-full font-serif py-3 px-4 bg-[#B7410E] text-[#F5F1E8] border-2 border-[#B7410E] rounded-md hover:bg-[#8B0000] hover:border-[#8B0000] transition duration-200 font-bold text-lg"
                type="submit"
              >
                Register
              </button>
            </div>
          </fieldset>

          <div className="text-center">
            <p className="font-serif text-parchment">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-gold hover:text-[#8B0000] transition duration-200 font-bold underline"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};
