import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Library } from "./library/Library";
import { Layout } from "./Layout";

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route index element={<Welcome />} />

      <Route element={<Layout />}>
        <Route path="library" element={<Library />} />
      </Route>
 </Routes>
  );
};
