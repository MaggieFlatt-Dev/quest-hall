import { useEffect, useState } from "react";
import {
  getTavernsById,
  getUsersByTavernId,
} from "../services/tavernsServices";
import { useParams } from "react-router-dom";
import { getUsersGamesByUserId } from "../services/userGamesServices";

export const TavernDetails = ({ user }) => {
  // Fetch users in this tavern by tavern id
  const [tavernUsers, setTavernUsers] = useState([]);
  const [tavern, setTavern] = useState({});
  const [sharedGames, setSharedGames] = useState([])

  const { tavernId } = useParams();

  useEffect(() => {
    getUsersByTavernId(tavernId).then(setTavernUsers);
    getTavernsById(tavernId).then(setTavern);
  }, [tavernId]);

  //Loop through tavernUsers and fetch each one's games
  useEffect(() => {
    Promise.all(tavernUsers.map((user) => getUsersGamesByUserId(user.id))).then(
      (allUserGamesArrays) => {
        //Flatten all games into one array
        const allGames = allUserGamesArrays.flat();

        //Then find the shared multiplayer ones
        const multiplayerGames = allGames.filter(
          (game) => game.gameType === "Multiplayer",
        );

        //Group games by title
        const sharedGames = {}
        multiplayerGames.forEach(game => {
          if (!sharedGames[game.title]) {
            sharedGames[game.title] = []
          }
          sharedGames[game.title].push(game)
        })
        
        //Keep only games with 2+ users
        const finalSharedGames = Object.values(sharedGames).filter(games => games.length >= 2)
        
        //Save to state
        setSharedGames(finalSharedGames)
      },
    );
  }, [tavernUsers]);

  return (
    <div className="bg-gray min-h-screen w-full pt-20">
      <div className="text-offWhite flex justify-center text-3xl font-bold">
        {tavern.name}
      </div>
      <div className="text-offWhite flex justify-center gap-2">
        <div>Patrons:</div>
        {tavernUsers.map((tavernUser) => tavernUser.username).join(", ")}
      </div>
    </div>
  );
};
