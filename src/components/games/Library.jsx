import { useEffect, useState } from "react";
import { getUsersGamesByUserId } from "../services/userGamesServices";
import { Link } from "react-router-dom";

export const Library = ({ user }) => {
  const [usersGames, setUsersGames] = useState([]);

  useEffect(() => {
    //get users games
    getUsersGamesByUserId(user?.id).then(setUsersGames);
  }, [user]);

  return (
    <div className="bg-gray min-h-screen w-full pt-16">
      <div className="grid grid-cols-2 gap-8 p-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {/*map through users games*/}
        {usersGames.map((usersGame) => {
          return (
            <div key={usersGame.id}>
              <div className="aspect-[2/3] w-48 w-full overflow-hidden rounded-lg shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-3">
                <Link to={`/games/${usersGame.id}`}>
                <img
                  src={usersGame.imageUrl}
                  alt={usersGame.title}
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
