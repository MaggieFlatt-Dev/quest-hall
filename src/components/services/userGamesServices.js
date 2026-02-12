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