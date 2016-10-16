# Kickoff React

A boilerplate made using ReactJs, Redux and Semantic UI.

[DEMO](http://kickoff-react.surge.sh/)

### Features

- Redux state management [redux](https://github.com/reactjs/redux)
- SASS support
- Manage app using [create-react-app](https://github.com/facebookincubator/create-react-app)
- Easy deployment using [Surge.sh](https://surge.sh/)
- API [Stackable.space](http://www.stackabke.space/)
- [Semantic UI](http://semantic-ui.com/)

## Requirements

- [Node](https://nodejs.org) 4.x or better

## Stack

- [React](http://facebook.github.io/react) for development
- [Babel](http://babeljs.io/) for ES6+ support
- [create-react-app](https://github.com/facebookincubator/create-react-app) as stack

## Installation

Make sure you install `create-react-app` once globally first by:

```sh
npm install -g create-react-app
```

Start by installing dependencies:

```sh
npm install
```

## Running

Once dependencies are installed, run with:

```sh
npm start
```

## Configuration

Configuration file is located at `./core/constants.js`

## Build

To build for production

```sh
npm run build
```

## Deployment

Make sure `surge` is installed if not use: `npm install -g surge`

To deploy

```
npm run build && surge build
```

## Tests

Running tests

```sh
npm run test
```

To write tests follow: [http://facebook.github.io/jest/docs/api.html](http://facebook.github.io/jest/docs/api.html)

## Notes

-
