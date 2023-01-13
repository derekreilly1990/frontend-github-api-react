<h1 align="center">React Frontend Starter</h1>

This is a project starter which includes some basics like:
- Routing
- Axios
- Redux
- sass
- styled-components

## 💪 The Challenge 
1. Create a Github Profile Page
   1. Use the GitHub api to fetch details from your Github account(The base url and a
      sample url for getting your user are in api-constants.ts and example 
      usage in Home.tsx) 
   2. Create a nice looking profile page with your avatar/profilepicture and 
      the details you feel should be on a profile page. use whichever 
      styling method/library you are comfortable with, we encourage using 
      CSS rather than a Component library(Have some fun 😃 )
2. Create a seperate page listing the most popular GitHub repo's
   1. This should be created using CSS and not a component library. We 
      challenge you to use CSS Grid or Flex 
   2. Display Whatever fields you feel are important, include a link to the repo

3. Create Routes and Buttons to Link the 2 pages.

### 🏋️ Stretch Goals:
1. Authenticate against Github API
2. Ensure everything is fully typed(no use of any)
3. List 10 of your Repos On Your Profile page

# 🚀 Available Scripts

In the project directory, you can run:

## ⚡️ start

```
npm start
```

or

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## 🧪 test

```
npm test
```

or

```
yarn test
```

Launches the test runner in the interactive watch mode.


## 🦾 build

```
npm build
```

or

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## 🧶 lint

```
npm lint
```

or

```
yarn lint
```

Creates a `.eslintcache` file in which ESLint cache is stored. Running this command can dramatically improve ESLint's running time by ensuring that only changed files are linted.

## 🎯 format

```
npm format
```

or

```
yarn format
```

Checks if your files are formatted. This command will output a human-friendly message and a list of unformatted files, if any.


# 🧬 Project structure

This is the structure of the files in the project:

```sh
    │
    ├── public                  # public files (favicon, .htaccess, manifest, ...)
    ├── src                     # source files
    │   ├── components
    │   ├── pages
    │   ├── resources           # images, constants and other static resources
    │   ├── store               # Redux store
    │   │   ├── actions         # store's actions
    │   │   └── reducers        # store's reducers
    │   ├── styles
    │   ├── tests               # all test files
    │   ├── types               # data interfaces
    │   ├── utility             # utilities functions and custom components
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   ├── RootComponent.tsx   # React component with all the routes
    │   ├── serviceWorker.ts
    │   └── setupTests.ts
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

<p align="center">Bootstrapped with Create React App.</p>
