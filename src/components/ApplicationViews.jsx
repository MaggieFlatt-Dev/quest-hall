import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Library } from "./games/Library";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";
import { getUserById } from "./services/userServices";
import { GameDetails } from "./games/GameDetails";
import { EditGame } from "./games/EditGame";
import { AddGame } from "./games/AddGame";
import { Taverns } from "./taverns/Taverns";
import { TavernDetails } from "./taverns/TavernDetails";

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
      <Route path="taverns" element={<Taverns user={user} />} />

      {/*All other routes with NavBar*/}
      <Route element={<Layout />}>
        <Route path="games">
          <Route index element={<Library user={user} />} />
          <Route path=":id" element={<GameDetails user={user} />} />
          <Route path=":id/edit" element={<EditGame user={user} />} />
        </Route>
        <Route path="addGame" element={<AddGame user={user} />} />
        <Route path="taverns/:id" element={<TavernDetails user={user} />} />
      </Route>
    </Routes>
  );
};
