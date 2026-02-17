import { useEffect, useState } from "react";
import {
  getTavernsById,
  getUsersByTavernId,
} from "../services/tavernsServices";
import { useParams } from "react-router-dom";

export const TavernDetails = ({ user }) => {
  // Fetch users in this tavern by tavern id
  const [tavernUsers, setTavernUsers] = useState([]);
  const [tavern, setTavern] = useState({});

  const { tavernId } = useParams();

  useEffect(() => {
    getUsersByTavernId(tavernId).then(setTavernUsers);
    getTavernsById(tavernId).then(setTavern);
  }, [tavernId]);

  //Loop through tavernUsers and fetch each one's games
  //Then find the shared multiplayer ones
  //Group games by title
  //Count how many users have each title 
  //If 2+ users have it AND it's multiplayer, include it 
  
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
