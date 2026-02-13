import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getUsersGameById,
  updateUsersGame,
} from "../services/userGamesServices";
import { getPlatforms } from "../services/platformServices";

export const EditGame = ({ user }) => {
  //set state
  const [editedGame, setEditedGame] = useState({});
  const [platforms, setPlatforms] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  //Check if user is creator for later gamehub/game catalog feature
  const isCreator = editedGame?.userId === user?.id;

  //fetch game data and populate editedGame
  useEffect(() => {
    getUsersGameById(id).then((gameObj) => {
      setEditedGame(gameObj);
    });
  }, [id]);

  //fetch all platforms
  useEffect(() => {
    getPlatforms().then(setPlatforms);
  }, []);

  //handleInputChange - Make a copy of the game object, change one property based on what the user just typed, then save that copy back to state
  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const copy = { ...editedGame };
    if (type === "radio") {
      copy[name] = parseInt(value);
    } else {
      copy[event.target.id] = value;
    }
    setEditedGame(copy);
  };

  //updateGame and pass the editedGame and navigate back to gameDetails
  //passedEdited game passes platform too, need to delete the platform before sending back to database
  const handleUpdateUsersGame = () => {
    updateUsersGame(id, editedGame).then(() => {
      navigate(`/games/${id}`);
    });
  };

  return (
    <form className="bg-gray min-h-screen w-full pt-16">
      <div className="bg-stone border-olive m-10 flex flex-col gap-8 rounded-lg border border-4 border-solid p-5 md:flex-row">
        <img
          src={editedGame?.imageUrl || null}
          alt="preview"
          className="aspect-[2/3] rounded-lg md:h-80 lg:h-96"
        />
        <div className="flex flex-1 flex-col gap-y-10">
          <div>
            <div className="text-mediumGreen text-xl font-bold">Title: </div>
            {/*Make input fields for each item and use onChange to make a copy that can be edited */}
            <input
              name="title"
              type="text"
              disabled={!isCreator}
              value={editedGame?.title || ""}
              onChange={handleInputChange}
              required
              className="text-charcoal border-mediumGreen bg-offWhite w-full rounded-md border border-solid text-4xl font-bold"
            />
          </div>
          <div className="text-charcoal flex flex-col gap-y-4 text-base">
            <div>
              <div className="text-mediumGreen text-xl font-bold">
                Description:{" "}
              </div>
              <textarea
                name="description"
                type="text"
                disabled={!isCreator}
                value={editedGame?.description || ""}
                onChange={handleInputChange}
                required
                className="bg-offWhite w-full rounded-md border border-solid"
              />
            </div>
            <div>
              <div className="text-mediumGreen text-xl font-bold">
                Game Platform:
              </div>
              {platforms.map((platform) => (
                <label
                  key={platform.id}
                  className="mb-2 flex items-center gap-2"
                >
                  <input
                    type="radio"
                    name="platformId"
                    value={platform.id}
                    checked={editedGame.platformId === platform.id}
                    onChange={handleInputChange}
                    required
                  />
                  {platform.name}
                </label>
              ))}
            </div>
            <div>
              <div className="text-mediumGreen text-xl font-bold">
                Game Type:{" "}
              </div>
              <input
                name="gameType"
                type="text"
                disabled={!isCreator}
                value={editedGame?.gameType || ""}
                onChange={handleInputChange}
                required
                className="bg-offWhite w-full rounded-md border border-solid"
              />
            </div>
            <div>
              <div className="text-mediumGreen text-xl font-bold">
                Image URL:{" "}
              </div>
              <input
                name="imageUrl"
                type="text"
                disabled={!isCreator}
                value={editedGame?.imageUrl || ""}
                onChange={handleInputChange}
                required
                className="bg-offWhite w-full rounded-md border border-solid"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end gap-2">
          <button
            className="btn-four"
            type="button"
            onClick={() => {
              handleUpdateUsersGame();
            }}
          >
            Save Changes
          </button>
          <button
            className="btn-four"
            type="button"
            onClick={() => navigate(`/games/${id}`)}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};
