import { useEffect, useState } from "react";
import { getGameById } from "../services/gameServices";
import { useParams } from "react-router-dom";
import { getPlatformByUserId } from "../services/platformServices";

export const EditGame = ({ user }) => {
  const [game, setGame] = useState({});
  const [platform, setPlatform] = useState({});
  const { gameId } = useParams();

  //getGameById pass in gameId, then set game in state
  useEffect(() => {
    getGameById(gameId).then((gameObj) => {
      setGame(gameObj);
    }, {});
  });

  //getPlatformByUserId and pass in userId and gameId. An array will be returned so get 1st object then set to platform state
  useEffect(() => {
    getPlatformByUserId(user?.id, gameId).then((platformArray) => {
      const platformObj = platformArray[0];
      setPlatform(platformObj);
      console.log(platformObj);
    });
  }, [user?.id, gameId]);

  return (
    <form className="py-16">
      <h2>Edit Game</h2>
      <fieldset>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={game.name || ""}
            onChange={(event) => {
              const copy = { ...game };
              copy.name = event.target.value;
              setGame(copy);
            }}
            required
            className=""
          />
        </div>
        <div>
          <label>ImageUrl: </label>
          <input
            type="text"
            value={game.imageUrl || ""}
            onChange={(event) => {
              const copy = { ...game };
              copy.imageUrl = event.target.value;
              setGame(copy);
            }}
            required
            className=""
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            value={game.description || ""}
            onChange={(event) => {
              const copy = { ...game };
              copy.description = event.target.value;
              setGame(copy);
            }}
            required
            className=""
          />
        </div>
        <div>
          <label>Game Type: </label>
          <input
            type="select" //Need to look up what type a select menu is
            value={game.gameType || ""}
            onChange={(event) => {
              const copy = { ...game };
              copy.gameType = event.target.value;
              setGame(copy);
            }}
            required
            className=""
          />
        </div>
        <div>
          <label>Platform User Owns Game On: </label>
          <input
            type="text"
            value={platform.platform?.name || ""}
            onChange={(event) => {
              const copy = { ...game };
              copy.platform = event.target.value;
              setGame(copy);
            }}
            required
            className=""
          />
        </div>
      </fieldset>
    </form>
  );
};
