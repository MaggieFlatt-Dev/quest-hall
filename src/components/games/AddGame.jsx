import { useEffect, useState } from "react";
import { getPlatforms } from "../services/platformServices";
import { useNavigate } from "react-router-dom";
import { createGame } from "../services/userGamesServices";

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

  const navigate = useNavigate();

  useEffect(() => {
    getPlatforms().then(setPlatforms);
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
    <form>
      <div className="py-15 text-xl font-bold">For Greg! :D</div>
      <h2>Add Game To Library </h2>
      <img
        src={usersGame.imageUrl || null}
        alt="preview"
        className="aspect-[2/3] rounded-lg md:h-80 lg:h-96"
      />
      <fieldset>
        <label>Title: </label>
        <input
          type="text"
          className="w-96 border"
          placeholder="Title of game"
          onChange={(event) => {
            const gameCopy = { ...usersGame };
            gameCopy.title = event.target.value;
            setUsersGame(gameCopy);
          }}
        />
      </fieldset>
      <fieldset>
        <label>Image Url: </label>
        <input
          type="text"
          className="w-96 border"
          placeholder="Game image url"
          onChange={(event) => {
            const gameCopy = { ...usersGame };
            gameCopy.imageUrl = event.target.value;
            setUsersGame(gameCopy);
          }}
        />
      </fieldset>
      <fieldset>
        <label>Description: </label>
        <input
          type="text"
          className="w-96 border"
          placeholder="Brief description of game"
          onChange={(event) => {
            const gameCopy = { ...usersGame };
            gameCopy.description = event.target.value;
            setUsersGame(gameCopy);
          }}
        />
      </fieldset>
      <fieldset>
        <label>Game Platform: </label>
        {platforms.map((platform) => (
          <label key={platform.id}>
            <input
              type="radio"
              name="platformId"
              value={platform.id}
              className="mb-2 gap-2"
              onChange={(event) => {
                const gameCopy = { ...usersGame };
                gameCopy.platformId = parseInt(event.target.value);
                setUsersGame(gameCopy);
              }}
            />
            {platform.name}
          </label>
        ))}
      </fieldset>
      <fieldset>
        <label>Game Type: </label>
        <input
          type="text"
          className="w-96 border"
          placeholder="multiplayer, co-op, single player, etc."
          onChange={(event) => {
            const gameCopy = { ...usersGame };
            gameCopy.gameType = event.target.value;
            setUsersGame(gameCopy);
          }}
        />
      </fieldset>
      <button
        className=""
        type="button"
        onClick={() => {
          handleSave();
        }}
      >
        Add Game
      </button>
    </form>
  );
};
