import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Library } from "./games/Library";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";
import { getUserById } from "./services/userServices";
import { GameDetails } from "./games/GameDetails";

export const ApplicationViews = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    //get user
    const userdata = JSON.parse(localStorage.getItem("QuestHall_user"));
    const userId = userdata.id;
    getUserById(userId).then(setUser);
  }, []);

  return (
    <Routes>
      <Route index element={<Welcome />} />

      {/*All other routes with NavBar*/}
      <Route element={<Layout />}>
        <Route path="games">
          <Route index element={<Library user={user} />} />
          <Route path="/games/:gameId" element={<GameDetails user={user} />} />
        </Route>
      </Route>
    </Routes>
  );
};
