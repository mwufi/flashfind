# Flashfind

The goal of this project is to build a tool to explore CSS+HTML faster.

* Take in a webpage
* Navigate different sub-sections of the DOM
* Explore the elements you're interested in

# Current Prototype

* Navigate with `j`,`k`,`h`,`l` (to move to parent/child and adjacent DOM nodes)

![](https://github.com/mwufi/flashfind/raw/master/screenshots/Screen%20Shot%202019-04-20%20at%203.32.16%20AM.png)

How does it work right now? WE have an `iframe` and a `TreeView`, which both render a raw HTML DOM.

# Contribute!

## Design

What's the most helpful things you wish you could do with devtools?

For me, it'd involve getting components used in a webpage, and seeing their HTML/CSS in a way that allows me to get a sense of the design system.

## Build
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
