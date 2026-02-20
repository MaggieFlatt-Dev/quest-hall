import { useEffect, useState } from "react";
import { getPlatforms } from "../services/platformServices";
import { useNavigate } from "react-router-dom";
import { createGame } from "../services/userGamesServices";
import { getGameTypes } from "../services/gameServices";

export const AddGame = ({ user }) => {
  //Initialize a form state with empty game object
  const [usersGame, setUsersGame] = useState({
    title: "",
    imageUrl: "",
    description: "",
    gameType: "",
    platformId: "",
  });

  //fetch platforms
  const [platforms, setPlatforms] = useState([]);

  //fetch gameTypes
  const [gameTypes, setGameTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getPlatforms().then(setPlatforms);
    getGameTypes().then(setGameTypes);
  }, []);

  //Validate that all required fields are filled
  const isValidGame = (usersGame) => {
    return (
      usersGame.title &&
      usersGame.imageUrl &&
      usersGame.description &&
      usersGame.gameType &&
      usersGame.platformId
    );
  };

  //Save new game to library and navigate back
  const handleSave = () => {
    if (isValidGame(usersGame)) {
      const newGame = {
        userId: user.id,
        title: usersGame.title,
        imageUrl: usersGame.imageUrl,
        description: usersGame.description,
        gameType: usersGame.gameType,
        platformId: usersGame.platformId,
      };
      createGame(newGame).then(() => {
        navigate("/games");
      });
    } else {
      window.alert("Please fill out all fields!");
    }
  };

  return (
    <form className="bg-gray min-h-screen w-full py-16">
      <div className="bg-stone border-olive m-10 flex flex-col gap-8 rounded-lg border border-4 border-solid p-5 md:flex-row">
        <img
          src={usersGame.imageUrl || null}
          alt="preview"
          className="aspect-[2/3] rounded-lg md:h-80 lg:h-96"
        />
        <div className="flex flex-1 flex-col gap-y-10">
          <fieldset>
            <div className="text-mediumGreen text-xl font-bold">Title: </div>
            <input
              type="text"
              placeholder="Title of game"
              className="text-charcoal border-mediumGreen bg-offWhite w-full rounded-md border border-solid text-4xl font-bold"
              onChange={(event) => {
                const gameCopy = { ...usersGame };
                gameCopy.title = event.target.value;
                setUsersGame(gameCopy);
              }}
            />
          </fieldset>
          <fieldset>
            <div className="text-mediumGreen text-xl font-bold">
              Description:{" "}
            </div>
            <input
              type="text"
              placeholder="Brief description of game"
              className="bg-offWhite w-full rounded-md border border-solid"
              onChange={(event) => {
                const gameCopy = { ...usersGame };
                gameCopy.description = event.target.value;
                setUsersGame(gameCopy);
              }}
            />
          </fieldset>
          <fieldset>
            <div className="text-mediumGreen text-xl font-bold">
              Game Platform:{" "}
            </div>
            {platforms.map((platform) => (
              <div key={platform.id} className="mb-2 flex items-center gap-2">
                <input
                  type="radio"
                  name="platformId"
                  value={platform.id}
                  onChange={(event) => {
                    const gameCopy = { ...usersGame };
                    gameCopy.platformId = parseInt(event.target.value);
                    setUsersGame(gameCopy);
                  }}
                />
                {platform.name}
              </div>
            ))}
          </fieldset>
          <fieldset>
            <div className="text-mediumGreen text-xl font-bold">
              Game Type:{" "}
            </div>
            <select
              value={usersGame.gameType || ""}
              onChange={(event) => {
                const gameCopy = { ...usersGame };
                gameCopy.gameType = event.target.value;
                setUsersGame(gameCopy);
              }}
              className="bg-offWhite w-full rounded-md border border-solid"
            >
              <option value="">Select A Game Type</option>
              {gameTypes.map((gameType) => (
                <option key={gameType.id} value={gameType.id}>
                  {gameType.type}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <div className="text-mediumGreen text-xl font-bold">
              Image Url:{" "}
            </div>
            <input
              type="text"
              placeholder="Game image url"
              className="bg-offWhite w-full rounded-md border border-solid"
              onChange={(event) => {
                const gameCopy = { ...usersGame };
                gameCopy.imageUrl = event.target.value;
                setUsersGame(gameCopy);
              }}
            />
          </fieldset>
          <button
            className="btn-four"
            type="button"
            onClick={() => {
              handleSave();
            }}
          >
            Add Game
          </button>
        </div>
      </div>
    </form>
  );
};
