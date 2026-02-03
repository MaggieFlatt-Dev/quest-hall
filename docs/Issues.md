# Issues 

# View Game Library 
As a user, I should be able to see my own game library

Acceptance Criteria: 
- Given the user wants to view their library of games
- When the user logins in they will click the library button
- Then their library of games will display by cover image in flex or grid display

# Add A Game To Library
As a user, I should be able to add a game to my library

Acceptance Criteria:
- Given the user wants to add a game to their collection
- When the user clicks on Add Game in the nav bar
- Then a form to add a game (name, description, url for image, platform they own the game on, game type (multiplayer/single/co-op)) will display 
AND when the user clicks  the “Add Game” button after filling out the details
THEN the user will be directed back to their library

# Edit A Game In Library 
As a user, I should be able to edit a game in my library

Acceptance Criteria:
- Given the user wants to edit their game information
- When the user clicks on a game
- Then the game details will appear with an “Edit Game” button 
AND when a user clicks “Edit Game”  
THEN the user will see a pre-filled form with the game details
AND when the user clicks the “Save Game” button 
THEN  the user will be directed back to their library 

# Remove A Game From Library 
As a user, I should be able to remove a game in my library

Acceptance Criteria:
- Given the user wants to remove a game from their library 
- When the user clicks on a game
- Then the game details will appear with an “Remove Game” button
AND when the  user clicks “Remove Game”
THEN the user will be directed back to their library 

# STRETCH GOALS

# Join A Tavern
As a user, I should be able to join a tavern with friends

Acceptance Criteria:
- Given the user wants to join a tavern with friends
- When the user is logged in and clicks the “Taverns” button
- Then the user will see a list of “taverns” in a flex or grid display to join
AND when the user choices a tavern to join 
THEN the user will be directed to the tavern page that will display games they have in common with their friends

# See What Games My Friends Have In Common
As a user, I should be able to see what games my friends and I have in common

Acceptance Criteria:
- Given the user joins a tavern with friends
- When 2 or more users  join
- Then the page will display all multiplayer games that 2 or more patrons have in common by cover image. Under cover image of each game a list of the users who own it as well as what platform they own it on will display

# Favorite A Game In Library 
As a user, I should be able to favorite a game in my library

Acceptance Criteria:
- Given the user wants to mark a game as a favorite
- When the user clicks the favorite button (the outline of a  star) on a game in their library
- Then a solid gold star icon will display on the game cover image. The user can toggle the favorite star on and off from the library but they can also toggle the favorite star on and off in the game details and edit game views

# Select Multiple Platforms For A Game
As a user, I should be able to select multiple platforms for a game

Acceptance Criteria:
- Given the user wants to mark that they own a game on multiple platforms
- When the user is adding or editing a game AND selects multiple platforms using checkboxes instead of radio buttons
- Then the system will create a separate entry for each platform selected
AND when the user views their library
THEN that game card will display all the platforms they own it on