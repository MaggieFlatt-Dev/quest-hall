export const getTaverns = () => {
  return fetch(`http://localhost:8000/taverns`).then(res => res.json())
 }

export const getTavernsById = (tavernId) => {
  return fetch(`http://localhost:8000/taverns/${tavernId}`).then(res => res.json())
}
 
export const getUsersByTavernId = (tavernId) => {
  return fetch(`http://localhost:8000/users?tavernId=${tavernId}`).then(res => res.json())
 }