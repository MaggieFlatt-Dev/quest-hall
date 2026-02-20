import { useEffect, useState } from "react";
import {
  getTavernsById,
  getUsersByTavernId,
} from "../services/tavernsServices";
import { useParams } from "react-router-dom";
import { getUsersGamesByUserId } from "../services/userGamesServices";
import { updateUser } from "../services/userServices";

export const TavernDetails = ({ user }) => {
  // Fetch users in this tavern by tavern id
  const [tavern, setTavern] = useState({});
  const [tavernUsers, setTavernUsers] = useState([]);
  const [finalSharedGames, setFinalSharedGames] = useState([]);

  const { tavernId } = useParams();

  useEffect(() => {
    //Get users in Tavern but wait a moment for user update to complete
    setTimeout(() => {
      getUsersByTavernId(tavernId).then(setTavernUsers);
    }, 50);
    getTavernsById(tavernId).then(setTavern);
  }, [tavernId, user]);

  //Loop through tavernUsers and fetch each one's games
  //Fetch AFTER we get the users
  useEffect(() => {
    //Don't run if no users
    if (tavernUsers.length === 0) return;
    Promise.all(tavernUsers.map((user) => getUsersGamesByUserId(user.id))).then(
      (allUserGamesArrays) => {
        //Flatten all games into one array
        const allGames = allUserGamesArrays.flat();

        //Then find the shared multiplayer ones
        const multiplayerGames = allGames.filter(
          (game) => game.gameTypeId === 3,
        );

        //Group games by title
        const sharedGames = {};
        multiplayerGames.forEach((game) => {
          if (!sharedGames[game.title]) {
            sharedGames[game.title] = [];
          }
          sharedGames[game.title].push(game);
        });

        //Keep only games with 2+ users
        const finalSharedGames = Object.values(sharedGames).filter(
          (games) => games.length >= 2,
        );

        //Save to state
        setFinalSharedGames(finalSharedGames);
      },
    );
  }, [tavernUsers]);

  //handle user joining and leaving a tavern
  useEffect(() => {
    if (!user?.id) return;
    //Join Tavern
    const updatedUser = { ...user, tavernId: parseInt(tavernId) };
    updateUser(user?.id, updatedUser);

    //Leave tavern when unmounting
    return () => {
      const leftUser = { ...user, tavernId: null };
      updateUser(user?.id, leftUser);
    };
  }, [tavernId, user?.id, user]);

  return (
    <div className="bg-gray min-h-screen w-full pt-20">
      <div className="text-offWhite flex justify-center text-3xl font-bold">
        {tavern.name}
      </div>
      <div className="text-offWhite flex justify-center text-sm pt-2">
        Find Your Next Quest 
      </div>
      <div className="text-offWhite flex justify-center gap-2 pt-4">
        <div>Patrons:</div>
        {tavernUsers.map((tavernUser) => tavernUser.username).join(", ")}
      </div>
      <div className="grid grid-cols-2 gap-8 p-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {finalSharedGames.map((finalSharedGame) => {
          return (
            <div key={finalSharedGame[0].title}>
              <div className="aspect-[2/3] w-full overflow-hidden rounded-lg shadow-lg">
                <img
                  src={finalSharedGame[0].imageUrl}
                  alt={finalSharedGame[0].title}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-offWhite text-md pt-3">
                Patrons Who Own Game:{" "}
                {finalSharedGame
                  .map((game) => {
                    const owner = tavernUsers.find(
                      (user) => user?.id === game?.userId,
                    );
                    return owner?.username;
                  })
                  .join(", ")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
