This test is designed for us to understand your comfort level in using React JS, RXJS and Redux. Please follow the instructions below to complete the test.

#Clone the repo: https://github.com/LaurieWilliamsNZ/ReduxSimpleBoilerplate

#Use the api https://the-one-api.herokuapp.com/documentation with the provided access token. (or create your own - https://the-one-api.herokuapp.com/sign-up)

#Create a simple theme with styled-components.
(https://www.styled-components.com/) to style HTML element. How you style the app is up to you. All styles must be done with styled-components.

#Create an epic (see https://redux-observable.js.org/) to fetch a list of characters from the API using the API documentation and store the results in your redux store. The epic should dispatch a success or failure message on completion.

#Using a selector (https://github.com/reduxjs/reselect), create an input field which allows the user to filter characters by their name and display filtered results.

#All epics must dispatch a 'show-loading' bar on start and dispatch 'hide-loading' bar on stop. See https://github.com/mironov/react-redux-loading-bar or any loading bar of your choosing.

#When the user clicks on a character, create an epic to query the character by their id and store the data in your redux store.

#Create a new route (see https://github.com/supasate/connected-react-router) to display a list of character attributes. Style this however you like.

## Available Scripts

In the project directory, you can run:

### `git clone https://github.com/LaurieWilliamsNZ/ReduxSimpleBoilerplate`

### `yarn install`

### `yarn start`
