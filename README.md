# Kickoff React

Kickoff React

[DEMO](http://kickoff-react.surge.sh/)

### Features

- Redux state management [redux](https://github.com/reactjs/redux)
- SASS support
- Manage app using [create-react-app](https://github.com/facebookincubator/create-react-app)
- Easy deployment using [Surge.sh](https://surge.sh/)
- API [Stackable.space](http://www.stackabke.space/)
- [Semantic UI](http://semantic-ui.com/)
- Storybook Driven Development [Storybook](https://storybooks.js.org)

## Requirements

- [Node](https://nodejs.org) 4.x or better

## Stack

- [React](http://facebook.github.io/react) for development
- [Babel](http://babeljs.io/) for ES6+ support
- [create-react-app](https://github.com/facebookincubator/create-react-app) as stack

## Installation

Close this repository locally by:

```sh
git clone https://github.com/perminder-klair/kickoff-react.git app
```

Start by installing dependencies:

```sh
npm install
```

## Running

Once dependencies are installed, run with:

```sh
yarn start
```

## Configuration

Configuration file is located at `./core/constants.js`

## Build

To build for production

```sh
yarn run build
```

## Deployment

Make sure `surge` is installed if not use: `npm install -g surge`

To deploy

```
yarn run build && surge build
```

## Tests

Running the Storybook

```sh
yarn run storybook
```

This will launch the storybook at [http://localhost:9009](http://localhost:9009)

Running jest tests

```sh
yarn run test
```

To write tests follow: [http://facebook.github.io/jest/docs/api.html](http://facebook.github.io/jest/docs/api.html)

## Notes

-
