import { useEffect, useState } from "react";
import { deleteGame, getGameById } from "../services/gameServices";
import { useNavigate, useParams } from "react-router-dom";
import { getPlatformByUserId } from "../services/platformServices";

export const GameDetails = ({ user }) => {
  //set state for game and platform, useParams of gameId
  const [game, setGame] = useState({});
  const [platform, setPlatform] = useState({});
  const { gameId } = useParams();
  const navigate = useNavigate();

  //getGameById pass in gameId, then set game in state
  useEffect(() => {
    getGameById(gameId).then(setGame);
  }, [gameId]);

  //getPlatformByUserId and pass in userId and gameId. An array will be returned so get 1st object then set to platform state
  useEffect(() => {
    getPlatformByUserId(user?.id, gameId).then((platformArray) => {
      const platformObj = platformArray[0];
      setPlatform(platformObj);
      console.log(platformObj);
    });
  }, [user?.id, gameId]);

  //deleteGame and pass in gameId then navigate back to game library
  const handleDelete = () => {
    deleteGame(gameId).then(() => {
      navigate("/games");
    });
  };
  return (
    <div className="bg-gray min-h-screen w-full py-16">
      <div className="bg-stone border-olive m-10 flex flex-col gap-8 rounded-lg border border-4 border-solid p-5 md:flex-row">
        <img
          src={game.imageUrl}
          alt={game.name}
          className="aspect-[2/3] rounded-lg md:h-80 lg:h-96"
        />
        <div className="flex flex-1 flex-col gap-y-10">
          <div className="text-offWhite text-4xl font-bold">{game.name}</div>
          <div className="text-charcoal flex flex-col gap-y-2 text-base">
            <div className="pb-4">
              <span className="text-mediumGreen font-bold">Description: </span>
              {game.description}
            </div>
            <div className="pb-4">
              <span className="text-mediumGreen font-bold">Platform User Owns Game On: </span>
              {platform.platform?.name}
            </div>
            <div className="pb-4">
              <span className="text-mediumGreen font-bold">Game Type: </span>
              {game.gameType}
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
