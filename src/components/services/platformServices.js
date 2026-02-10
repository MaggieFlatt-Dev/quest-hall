export const getPlatformByUserId = (userId, gameId) => {
  return fetch(`http://localhost:8000/usersGames?userId=${userId}&gameId=${gameId}&_expand=platform`).then(res => res.json())
 }