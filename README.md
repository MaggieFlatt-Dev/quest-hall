# Quest Hall

## Overview

Quest Hall is a centralized game library application that allows gamers to organize and manage their video game collections across multiple platforms in one convenient location. Users can create an account, build their personal game collection, and view all their games at a glance—eliminating the need to jump between different platforms and stores.

## Problem Statement

Gamers today own games across multiple platforms (PC, PlayStation, Xbox, Nintendo Switch, etc.). Currently, there's no centralized place to view and manage an entire game collection. Players have to jump between different platforms and stores to remember what they own, making it difficult to keep track of their libraries and organize their games.

## Solution

Quest Hall solves this by providing a single, unified platform where users can:
- Create an account and log in securely
- Manually add games to their personal collection
- Specify which platform they own each game on
- Categorize games as Single Player, Multiplayer, or Co-op
- View their entire game library across all platforms
- Edit game information in their collection
- Delete games from their library
- Mark games as favorites for quick access
- **(Stretch Goal)** Join a tavern with friends to see which multiplayer games everyone owns and easily decide what to play together

## Features

### MVP Features
- **User Authentication** - Secure login and registration with email and username validation
- **Game Library Management** - Full CRUD operations on personal game collections
- **Platform Tracking** - Organize games by platform (PC, PS5, PS4, Xbox, Nintendo Switch)
- **Game Categorization** - Organize games by type (Single Player, Multiplayer, Co-op)
- **Game Details** - View detailed information about each game including name, description, and cover image

### Stretch Goals
- **Tavern Feature** - Join virtual taverns with friends
- **Multiplayer Matching** - See which multiplayer/co-op games you have in common with tavern members
- **Favorites System** - Mark games as favorites for quick access
- **Multiple Platforms** - Add the same game on multiple platforms in a single entry

## Tech Stack

- **Frontend:** React 19.2.0
- **Routing:** React Router DOM 7.13.0
- **Styling:** Tailwind CSS 4.1.18
- **Build Tool:** Vite 7.2.4
- **Backend:** JSON Server (local mock API)
- **State Management:** React Hooks (useState)
- **Storage:** localStorage for user authentication

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/MaggieFlatt-Dev/quest-hall.git
   cd quest-hall
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Start JSON Server** (in a separate terminal)
   ```bash
   npx json-server --watch src/api/database.json --port 8000
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173` (or whatever port Vite displays)

## Project Structure

```
quest-hall/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── games/
│   │   │   ├── GameDetails.jsx
│   │   │   ├── Library.jsx
│   │   │   ├── AddGame.jsx
│   │   │   └── EditGame.jsx
|   |   |── |── nav/
│   │   │   └── Navbar.jsx
│   │   ├── taverns/
│   │   │   ├── Taverns.jsx
│   │   │   └── TavernDetails.jsx
│   │   ├── Welcome.jsx
│   │   ├── ApplicationViews.jsx
│   │   └── Authorized.jsx
│   ├── services/
│   │   ├── userServices.jsx
|   |   ├── platformServices.jsx
│   │   ├── gameServices.jsx
│   │   └── tavernServices.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
|── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── prettier.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

## User Stories

### MVP
- **View Library:** Users can see their personal game collection displayed as a grid of game cover images
- **Add Game:** Users can add a new game to their collection with name, description, image URL, platform, and game type
- **Edit Game:** Users can update game information in their collection
- **Delete Game:** Users can remove games from their library

### Stretch Goals
- **Favorite Games:** Users can mark games as favorites with a star icon
- **Join Tavern:** Users can join a tavern with friends
- **See Common Games:** Users can see which multiplayer games they have in common with tavern members

## Database Schema

### Tables
- **users** - User account information
- **games** - Game details and metadata
- **platforms** - Available gaming platforms
- **gamesPlatforms** - Many-to-many relationship between games and platforms
- **usersGames** - Many-to-many relationship between users and their games
- **favorites** - Many-to-many relationship for user favorites
- **taverns** - Tavern/group information

## Future Enhancements

- Integrate with game database APIs (RAWG, IGDB)
- Add game search and discovery features
- Implement game ratings and reviews
- Add social features (friends list, messaging)
- Mobile app version
- Game wishlist functionality
- Integration with Discord for tavern communication

## Contributing

This is a capstone project for a bootcamp. Contributions are not currently accepted.

## Author

Maggie Flatt

## License

This project is for educational purposes only.
