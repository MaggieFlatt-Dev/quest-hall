export const getTavernsById = () => {
  return fetch(`http://localhost:8000/taverns`).then(res=> res.json())
 }