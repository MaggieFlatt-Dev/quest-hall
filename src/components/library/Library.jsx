import { useEffect, useState } from "react";
import { getUsersGames } from "../services/userGamesServices";

export const Library = () => {
  const [games, setGames] = useState([]);

  //get users games
  const userdata = JSON.parse(localStorage.getItem("QuestHall_user"));
  const userId = userdata.id;

  useEffect(() => {
    getUsersGames(userId).then(setGames);
  }, [userId]);
  
  return (
    <main className="bg-gray min-h-screen w-full pt-16">
      <div>
      {/*map through users games*/}
        {games.map((game) => {
          return (
            <section key={game.id} className="mt-15">
              <div className="w-48 aspect-[2/3] overflow-hidden rounded-lg shadow-lg ml-15">
                <img src={game.game.imageUrl} alt={game.game.name} className="w-full h-full object-cover" />
                </div>
            </section>
         )
        })}
      </div>
    </main>
  );
};
