export const getGameById = (gameId) => {
return fetch(`http://localhost:8000/games/${gameId}`).then(res => res.json())
 }