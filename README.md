# whatmave

## [Live Demo](https://whatmave.herokuapp.com/)

# Introduction

Whatmave is a room chatting web platform where anyone needs just to authenticate using google ID and he/she can gain access to all the chats by any one in any room that exist, and also can message in any group. No one can delete any message or room. Firestore database is used to store the messages and rooms, and Javascript is used to create the complete app. All the other dependencies used are mentioned below. 
  Heroku is used for deployment.

[<img src="https://github.com/mavenickk/whatmave/blob/master/whatmave_live.gif" width="600" height="270">](https://mavetwitter.herokuapp.com/)


## Tools:
- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Firebase](https://firebase.google.com/) - Firebase helps you build and run successful apps.
- [MaterialUI](https://material-ui.com/) - React components for faster and easier web development.
- [React Router](https://reactrouter.com/) - a collection of navigational components that compose declaratively with your application.
- [React Context API](https://reactjs.org/docs/context.html) - Context provides a way to pass data through the component tree without having to pass props down manually at every level.
- [Google Authentication](https://firebase.google.com/docs/auth/web/google-signin) - Let user sign in directlt using his Google credentials.
- [Heroku](https://www.heroku.com) - Deployment.

## Key features:
- Authentication. (register, login, logout).
- Create a new group.
- Message in any group and get instant replies with fast and secure firestore database.
- Last seen time and last message shown as it does in whatsapp.
- Random avatars everytime it is getting loaded.
- View all messages belonging to a certain group.
- Style of sent and received messages are different.
- sidebar and chat section both are scrollable.



## Getting Started

**Step 1: Clone the code into a fresh folder**

```
$ git clone https://github.com/mavenickk/whatmave.git
$ cd whatmave
```

**Step 2: Open the folder in any editor (e.g. Visual Studio Code)**

```
$ code whatmave
$ npm i react
$ npm install -g firebase-tools
" change firebase.js file with whatever your firebase config data is"
$ npm - @material-ui/icons
$ npm i firebase
$ npm i react-router-dom

```




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
