import { Outlet } from "react-router-dom";
import { NavBar } from "./nav/NavBar";

//Layout wraps pages that need the NavBar

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
