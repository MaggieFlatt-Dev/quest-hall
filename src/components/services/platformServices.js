export const getPlatforms = () => { 
  return fetch(`http://localhost:8000/platforms`).then((res) => res.json())
}