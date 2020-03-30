## Block.one Technical Assessment

Full readme forthcoming. Live project: [https://admiring-kare-60e432.netlify.com/](https://admiring-kare-60e432.netlify.com/)

This Blockchain viewer shows a list of the most recent blocks from the EOSIO blockchain. When a user clicks the 'LOAD' button the 10 most recent blocks are updated. Block entries show the hash of the block, its timestamp, and the count of actions included in that block. Clicking a block entry smoothly expands to show the contents of the block output.

It is built using React, and utilizes hooks for local state and Redux for state management. I took a pretty simplistic approach and opted to use Thunks to handle asychronous actions.

### Project Structure

I opted to follow the 'Rails-style' pattern in structuring the project due to its simplicity. In enterprise projects I prefer to follow a feature based approach, however in following this structure, I find no explanation is required when a new Redux-familiar developer dives in; the actions are in the actions directory. The con of course to this approach on large projects is scalability.

### Code Coverage @100%!

![Image of Code Coverage](https://raw.githubusercontent.com/justbartlett/blockone-viewer/master/coverage.png)

### Remaining Iotas

I haven't refactored the app styles, breaking down the block component, using typescript throughout.

## Installation

To install the project, you'll need a copy of [npm](https://nodejs.org/en/) or [yarn](https://classic.yarnpkg.com/en/). Simply `cd` into the root of the project `npm install` or `yarn install` and use the available scripts to run or build the project and you're good to go.

## Available Scripts

In the project directory, you can run:

### `npm run coverage`

Runs the tests and gives a coverage report

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
