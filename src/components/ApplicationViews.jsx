import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Library } from "./library/Library";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";
import { getUserById } from "./services/userServices";

export const ApplicationViews = () => {
  const [user, setUser] = useState()

   useEffect(() => {
      //get user
      const userdata = JSON.parse(localStorage.getItem("QuestHall_user"));
      const userId = userdata.id;
      getUserById(userId).then(setUser);
   }, []);
  
  return (
    <Routes>
      <Route index element={<Welcome />} />

      <Route element={<Layout />}>
        <Route path="library" element={<Library user={user} />}  />
      </Route>
 </Routes>
  );
};
