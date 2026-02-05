import { Navigate, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Library } from "./library/Library";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="library" element={<Library />} />
    </Routes>
  );
};
