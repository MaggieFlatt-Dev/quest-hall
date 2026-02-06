import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, getUserByEmail } from "../services/userServices";
import { getUserByUsername } from "../services/userServices";
import logo from "../../assets/logo.png";

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

        navigate("/login");
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
    <main className="bg-charcoal flex min-h-screen items-center justify-center">
      <section className="w-full max-w-md">
        <form
          className="border-gold bg-iron rounded-lg border-2 p-8 shadow-lg"
          onSubmit={handleRegister}
        >
          <img
            src={logo}
            alt="Quest Hall Logo"
            className="logo-primary mx-auto"
          />
          <h2 className="text-parchment mb-8 text-center text-lg">
            Create Your Account
          </h2>

          <fieldset className="mb-4">
            <div className="form-group">
              <input
                onChange={updateUser}
                type="text"
                id="firstName"
                className="input-primary"
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
                className="input-primary"
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
                className="input-primary"
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
                className="input-primary"
                placeholder="Email address"
                required
              />
            </div>
          </fieldset>

          <fieldset className="mb-6">
            <div>
              <button className="btn-primary" type="submit">
                Register
              </button>
            </div>
          </fieldset>

          <div className="text-center">
            <p className="text-parchment">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-gold font-bold underline transition duration-200 hover:text-[#8B0000]"
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
