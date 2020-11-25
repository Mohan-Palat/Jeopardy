# Jeopardy

## Description
A browser based version of the classic television game show.  The application was written using React resulting in a single-page, dynamically updating solution.  Its data source is a third party API called jService (https://jservice.io/).

The current version supports one player and allows the user to choose between two game modes.  The first selects six random categories with five questions (i.e, clues) like the traditional game show.  The second mode allows users to select six categories from a predefined list.  

## Home Page
![Home Page](/documentation/images/JeopardyHomePage.png "Home Page")

## Game Board
![Game Board](/documentation/images/JeopardyGameBoard.png "Game Board")

## Clue
![Clue](/documentation/images/JeopardyClue.png "Clue")
 

### Link



## Wireframes & Planning
![Wireframe](/documentation/images/JeopardyWireframe.pdf "Wireframe")


## User Stories/ Features
- As a user, I should be given 6 random categories for the first game mode
- As a user, I should be able to choose the categories I want from a predefined list in the second mode.
- As a user, when I get a question correct, my score should increase
- As a user, when I get a question incorrect, my score should decrease
- As a user, I should be able to select a question
- As a user, I should see 5 questions under each category
- As a user, I should be able to enter my answer and have it validated
- As a user, when I answer a question, I should not be able to answer it again


## Technologies
* HTML
* CSS
* Javascript
* React
* Axios


## Future features
- Multiplayer option.
- Include Jeopardy sound bites and virtual host responses.
- Double Jeopardy.
- Final Jeopardy.
- Automatically filter out incomplete, duplicate, wrong data from API.

## Known Issues
- Bug in response input where prior answer is displayed on next popup.
- Amounts may appear out of order due to API inconsistencies.
- Answers from API are inconsistent and may contain additional characters (e.g., 'a train' instead of just 'train').  This results in incorrect answers on occasion. 

## Bonus Features
- React Router: In order to render a random game board and a custom game board we decided to use React Router 
to make the routes for our App
- React Hooks: In our New Game component, we had to route to a new page while also rendering data for the new game. In order to tackle this challenge, we used the useHistory hook


## What we learned

* The dynamic of group projects can be challenging.  Decision making and work division are some of the more difficult aspects.  There are many benefits, though.  Problem solutioning and idea generation were easier with mutiple people.
* Something we learned was the importance of understanding the React component lifecycle. Some of our functions weren't working as expected because we didn't take the lifecycle into account. However, after taking this into consideration, we were able to fix our App and get it running the right way. 