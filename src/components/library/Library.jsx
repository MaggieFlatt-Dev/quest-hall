import { useEffect, useState } from "react";
import { getUsersGames } from "../services/userGamesServices";
import { Link } from "react-router-dom";

export const Library = ({ user }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    //get users games
    getUsersGames(user?.id).then(setGames);
  }, [user]);

  return (
    <div className="bg-gray min-h-screen w-full pt-16">
      <div className="grid grid-cols-2 gap-8 p-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/*map through users games*/}
        {games.map((game) => {
          return (
            <div key={game.id}>
              <div className="aspect-[2/3] w-48 w-full overflow-hidden rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-3">
              <Link to={`/gameDetails/${game.id}`} key={game.id}>
                <img
                  src={game.game.imageUrl}
                  alt={game.game.name}
                  className="h-full w-full object-cover"
                />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
