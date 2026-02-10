import { useEffect, useState } from "react";
import { getGameById } from "../services/gameServices";
import { useParams } from "react-router-dom";

export const GameDetails = () => {
  const [game, setGame] = useState({});
  const { gameId } = useParams();

  useEffect(() => {
    getGameById(gameId).then(setGame);
  }, [gameId]);

  return (
    <div className="bg-gray min-h-screen w-full pt-16">
      <div className="flex bg-stone border-olive m-10 rounded-lg border border-4 border-solid p-5">
        <img src={game.imageUrl} alt={game.name} className="h-96 rounded-lg" />
        <div className="pl-95 text-4xl text-offWhite">{game.name}</div>
        <section>
          <div className="flex">{game.description}</div>
          <div>
            {/*Platform user owns game on*/}
          </div>
          <div>{game.gameType}</div>
        </section>
        <button>Edit Game</button>
        <button>Remove From Library</button>
      </div>
    </div>
  );
};
