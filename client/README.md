# tatami.lol

Live Link: [tatami.lol](https://tatami.lol)

## Technologies Used
- React.js
- Express.js
- Riot API (Pending full usage permission by Riot)
- Heroku App to host API requests
- Netlify to host front end

## Project Summary

Tatami.lol is a video game statistical analysis tool which takes statistics from a specific player's past ten games, and then presents concisely for the user to see. Multiple API requests are required which return arrays of large amounts of data, in which tatami.lol returns the most important information in which the user should see. Fun features (which are still being built upon) are also implemented, such as a quick randomizer for players to choose which character they are going to play.

## How to run locally
- git clone git@github.com:tatamibox/tatami.lol.git
- cd into the client and server, and run npm install in both directories
- open git bash, and node index.js (or nodemon index.js)
- AN API KEY FROM RIOT IS REQUIRED. THIS PROJECT WILL NOT RUN PROPERLY WITHOUT ONE!)
- create a .env file and create a variable RIOT_API_KEY={insert the api key you get from riots developer dashboard here}

You are now free to fully use the app!

## Preview
![Using the App](https://media.giphy.com/media/g0JfXYmppzeGQgOOlg/giphy.gif)
![Fun Corner!](https://media.giphy.com/media/ddiiy7zZsiIyLUlt9N/giphy.gif)


## Credits

[u.gg](https://u.gg) for inspiration