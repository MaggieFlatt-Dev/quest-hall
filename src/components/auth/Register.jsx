import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createUser, getUserByEmail } from "../services/userServices"
import { getUserByUsername } from "../services/userServices"



export const Register = (props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",

  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "QuestHall_user",
          JSON.stringify({
            id: createdUser.id,
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    //Check for duplicate email
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email? No good.
        window.alert("Account with that email address already exists")
      } else {
        //Check for duplicate userName
        getUserByUsername(user.username).then((usernameResponse) => {
          if (usernameResponse.length > 0) {
            window.alert("Username already taken")
          } else {
            // Good email and username? Create user.
            registerNewUser()
          }
        })
      }
    })
  }
  const updateUser = (evt) => {
    const copy = { ...user}
    copy[evt.target.id] = evt.target.value
    setUser(copy)
  }

  return (
    <main style={{ textAlign: "center" }}>
      <form className="form-login" onSubmit={handleRegister}>
        <h1>Quest Hall</h1>
        <h2>Please Register</h2>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First name"
              required
              autoFocus
            />
          </div>
        </fieldset>
         <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="text"
              id="lastName"
              className="form-control"
              placeholder="Last name"
              required
              autoFocus
            />
          </div>
        </fieldset>
          <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="email"
              id="username"
              className="form-control"
              placeholder="Create Username"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <input
              onChange={updateUser}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <button className="login-btn btn-info" type="submit">
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  )
}