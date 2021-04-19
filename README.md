# mavetwitter

## [Live Demo](https://whatmave.herokuapp.com/)

# Introduction

Mavetwitter is a web application backed by Django where every user can create, update and delete post on the feed(with timestamp). New users can set profile picture(also update later). Users can reset password via registered e-mail.  
Application uses PostgreSQL(relation database) to store user information and their blogs. AWS is used to store static files(profile picture). Heroku is used for deloyment.

[<img src="https://github.com/mavenickk/mavetwitter/blob/master/live.gif" width="600" height="270">](https://mavetwitter.herokuapp.com/)


## Tools:
- [Bootstrap](https://getbootstrap.com) - A CSS framework
- [Django](https://www.djangoproject.com) - Backend framework in python
- [PostgreSQL](https://www.postgresql.org) - A relational database system
- [Heroku](https://www.heroku.com) - Deloyment
- [AWS](https://aws.amazon.com) - S3 bucket, IAM
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - Let browser to access AWS bucket

## Key features:
- Authentication. (register, login, logout)
- Reset password via SMTP. (mail received with reset password link!)
- Create, update, delete post with timestamp. (only author can edit)
- Pagination (per page 5 post) - navigation to first, previous 3, current, next 3 and last page in the bottom.
- Profile update with picture.
- View all post by a user in page.



## Getting Started

**Step 1: Clone the code into a fresh folder**

```
$ git clone https://github.com/mavenickk/mavetwitter.git
$ cd mavetwitter
```

**Step 2: Create a Virtual Environment and install Dependencies**

Create a new Virtual Environment for the project and activate it. If you don't have the `virtualenv` command yet, you can find installation [instructions here](https://virtualenv.readthedocs.io/en/latest/).

```
$ virtualenv venv
$ source venv/bin/activate
```

Next, we need to install the project dependencies, which are listed in `requirements.txt`.

```
(venv) $ pip install -r requirements.txt
```

**Step 3: Run application**

Now we're ready to start our server which is as simple as:

```
(venv) $ python manage.py runserver
```

Open http://localhost:8000 (port number is prompted) to view it in your browser.

The app will automatically reload if you make changes to the code.
You will see the build errors and warnings in the console.(DEBUG = True)

Try hosted app [here.](https://mavetwitter.herokuapp.com)



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
