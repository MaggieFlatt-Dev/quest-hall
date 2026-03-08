# Quest Hall

## Views
- Login path - path = /login
- Register path - path = /register
- Welcome/Hub path - path = /welcome
- Library path - path = /library
- Game Details path - path = /game-details/:gameId
- Add Game path - path = /add-game
- Edit Game path - path = /edit-game/:gameId
- Taverns path - path = /taverns (stretch goal)
- Tavern Details path - path = /taverns/:tavernId (stretch goal)

## Components
- App.jsx
- ApplicationViews.jsx
- Authorized.jsx
- index.jsx

### nav
- Navbar.jsx

## Services
- userServices.jsx
    - getUserByEmail()
    - getUserByUsername()
    - createUser()
- gameServices.jsx
    - getGames()
    - getGameById()
    - createGame()
    - updateGame()
    - deleteGame()
- tavernServices.jsx (stretch goal)
    - getTaverns()
    - getTavernById()

## Forms
- LoginForm.jsx
- RegisterForm.jsx
- AddGameForm.jsx
- EditGameForm.jsx

## State Management
- User state (localStorage)
- Current user ID
- Current selected game
- Games data

## Stretch Goals
- Favorites functionality
- Tavern feature with multiplayer game matching
- Multiple platforms per game (checkboxes)