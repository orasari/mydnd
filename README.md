# MyDND by Mina Stankovic

This project is a drag-and-drop React application built with Create React App, leveraging Redux Toolkit for state management, and incorporating @dnd-kit and react-beautiful-dnd for drag-and-drop functionality.

# Initial start
- after cloning the project run npm install
- after npm install, run npm start

- The state of the board is persisted in the localStorage `persist:board`
note: only the boardReducer is persisted, the themeReducer is blacklisted in the persistConfig;

## Key Features

`Drag-and-Drop Support:` Powered by @dnd-kit/core and react-beautiful-dnd for intuitive interactions.

`State Management:` Redux Toolkit for managing application state, with support for persistence using redux-persist.

`TypeScript Integration:` Strongly typed development using TypeScript.

`Styling: Styled-components` for modular and reusable styling.

`Linting and Formatting:` ESLint and Prettier for consistent code quality.

`Responsive Design:` Fully responsive for various screen sizes.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run lint`

Runs ESLint to check for linting issues in the src directory.

### `npm run lint:fix`

Runs ESLint and Prettier to fix linting and formatting issues in the src directory.

### `npm run format`

Formats the source code in the src directory and other supported files (JSON, CSS, SCSS, MD) using Prettier.
