export const getUsersGamesByUserId = (userId) => {
  return fetch(`http://localhost:8000/usersGames/?userId=${userId}`).then(res => res.json())
}
 
export const getUsersGameById = (id) => {
return fetch(`http://localhost:8000/usersGames/${id}?_expand=platform`).then(res => res.json())
}

export const deleteUsersGame = (id) => {
  return fetch(`http://localhost:8000/usersGames/${id}`, {
    method: "DELETE",
  })
}

//need to remove added platform obj from getUsersGameId fetch call
export const updateUsersGame = (id, editedGame) => {
  const gameToSend = { ...editedGame }
  delete gameToSend.platform

  return fetch(`http://localhost:8000/usersGames/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gameToSend)
  })
}

export const createGame = (newGame) => {
  return fetch(`http://localhost:8000/usersGames`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGame)
  })
 }