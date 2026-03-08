export const getGameById = (gameId) => {
return fetch(`http://localhost:8000/games/${gameId}`).then(res => res.json())
}
 
export const getGameTypes = () => {
  return fetch(`http://localhost:8000/gameTypes`).then(res => res.json())
 }