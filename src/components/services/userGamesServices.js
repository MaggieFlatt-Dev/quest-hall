export const getUsersGames = (userId) => {
  return fetch(`http://localhost:8000/usersGames/?userId=${userId}&_expand=game`).then(res => res.json())
 }