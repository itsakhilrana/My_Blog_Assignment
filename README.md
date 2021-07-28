# My_Blog_Assignment

> Simple Bloging platform built with the MERN stack & Redux.

![screenshot](https://github.com/itsakhilrana/My_Blog_Assignment/blob/master/uploads/DevBlog.png)

## About the Project

- Implemented REST API's using express.
- Created a global predictable state container for the frontend using ReduxJS.
- Used React-Bootstrap to implement the responsive design.
- Designed schema for no-SQL DB (mongodb) using the mongoose.
- Deployed the database on mongo Atlas and hosted the app backend and frontend on heroku.

### Env Variables

Create a .env file in then root and add the following

```
NODE_ENV = development
PORT = 5000
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:6000)
npm start

# Run backend only
npm run nodemon
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku
