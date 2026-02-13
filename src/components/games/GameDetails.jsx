import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteUsersGame,
  getUsersGameById,
} from "../services/userGamesServices";

export const GameDetails = () => {
  //set state for game and platform, useParams of gameId
  const [usersGame, setUsersGame] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  //getGameById pass in gameId, then set game in state
  useEffect(() => {
    getUsersGameById(id).then(setUsersGame);
  }, [id]);

  //deleteGame and pass in gameId then navigate back to game library
  const handleDelete = () => {
    deleteUsersGame(id).then(() => {
      navigate("/games");
    });
  };

  return (
    <div className="bg-gray min-h-screen w-full py-16">
      <div className="bg-stone border-olive m-10 flex flex-col gap-8 rounded-lg border border-4 border-solid p-5 md:flex-row">
        <img
          src={usersGame.imageUrl}
          alt={usersGame.title}
          className="aspect-[2/3] rounded-lg md:h-80 lg:h-96"
        />
        <div className="flex flex-1 flex-col gap-y-10">
          <div className="text-offWhite text-4xl font-bold">
            {usersGame.title}
          </div>
          <div className="text-charcoal flex flex-col gap-y-2 text-base">
            <div className="pb-4">
              <span className="text-mediumGreen font-bold">Description: </span>
              {usersGame.description}
            </div>
            <div className="pb-4">
              <span className="text-mediumGreen font-bold">
                Game Platform:{" "}
              </span>
              {usersGame.platform?.name}
            </div>
            <div className="pb-4">
              <span className="text-mediumGreen font-bold">Game Type: </span>
              {usersGame.gameType}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-2">
          <button className="btn-four" onClick={() => navigate(`edit`)}>
            Edit Game
          </button>
          <button className="btn-four" onClick={handleDelete}>
            Remove From Library
          </button>
        </div>
      </div>
    </div>
  );
};
