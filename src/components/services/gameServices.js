export const getGameById = (gameId) => {
return fetch(`http://localhost:8000/games/${gameId}`).then(res => res.json())
}
 
export const deleteGame = (gameId) => {
  return fetch(`http://localhost:8000/games/${gameId}`, {
    method: "DELETE",
  })
}