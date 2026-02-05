import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
};
