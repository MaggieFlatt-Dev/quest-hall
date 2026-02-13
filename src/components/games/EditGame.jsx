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

  //handleInputChange - take whatever the state currently is ...copy and update just the field(s) that have changed
  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setEditedGame((prev) => ({
      ...prev,
      [name]: type === "radio" ? parseInt(value) : value,
    }));
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
            <label htmlFor="title" className="text-mediumGreen font-bold">
              Title:{" "}
            </label>
            {/*Make input fields for each item and use onChange to make a copy that can be edited */}
            <input
              name="title"
              type="text"
              disabled={!isCreator}
              value={editedGame?.title || ""}
              onChange={handleInputChange}
              required
              className="text-charcoal border-mediumGreen w-full rounded-md border border-solid bg-offWhite text-4xl font-bold"
            />
          </div>
          <div className="text-charcoal flex flex-col gap-y-4 text-base">
            <div>
              <label
                htmlFor="description"
                className="text-mediumGreen font-bold"
              >
                Description:{" "}
              </label>
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
              <label htmlFor="platform" className="text-mediumGreen font-bold">
                Users Platform:
              </label>
              {platforms.map((platform) => (
                <label key={platform.id} className="flex items-center gap-2 mb-2">
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
              <label htmlFor="gameType" className="text-mediumGreen font-bold">
                Game Type:{" "}
              </label>
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
              <label htmlFor="imageUrl" className="text-mediumGreen font-bold">
                Image URL:{" "}
              </label>
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
