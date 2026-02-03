import { Route, Routes, useLocation } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Authorized } from "./components/Authorized";
import { ApplicationViews } from "./components/ApplicationViews";
import { NavBar } from "./components/nav/NavBar";

export const App = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          // check if the user is authorized first
          <Authorized>
            <>
             <NavBar />
              {/* the appilcationViews is the child component of Authorized */}
              <ApplicationViews />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
};
