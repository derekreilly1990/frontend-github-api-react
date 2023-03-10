<h1 align="center">React Frontend Starter</h1>

This is a project starter which includes some basics like:
- Routing
- Axios
- Redux
- sass
- styled-components

## ๐ช The Challenge 
1. Create a Github Profile Page
   1. Use the GitHub api to fetch details from your Github account(The base url and a
      sample url for getting your user are in api-constants.ts and example 
      usage in Home.tsx) 
   2. Create a nice looking profile page with your avatar/profilepicture and 
      the details you feel should be on a profile page. use whichever 
      styling method/library you are comfortable with, we encourage using 
      CSS rather than a Component library(Have some fun ๐ )
2. Create a seperate page listing the most popular GitHub repo's
   1. This should be created using CSS and not a component library. We 
      challenge you to use CSS Grid or Flex 
   2. Display Whatever fields you feel are important, include a link to the repo

3. Create Routes and Buttons to Link the 2 pages.

### ๐๏ธ Stretch Goals:
1. Authenticate against Github API
2. Ensure everything is fully typed(no use of any)
3. List 10 of your Repos On Your Profile page

# ๐ Available Scripts

In the project directory, you can run:

## โก๏ธ start

```
npm start
```

or

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## ๐งช test

```
npm test
```

or

```
yarn test
```

Launches the test runner in the interactive watch mode.


## ๐ฆพ build

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

## ๐งถ lint

```
npm lint
```

or

```
yarn lint
```

Creates a `.eslintcache` file in which ESLint cache is stored. Running this command can dramatically improve ESLint's running time by ensuring that only changed files are linted.

## ๐ฏ format

```
npm format
```

or

```
yarn format
```

Checks if your files are formatted. This command will output a human-friendly message and a list of unformatted files, if any.


# ๐งฌ Project structure

This is the structure of the files in the project:

```sh
    โ
    โโโ public                  # public files (favicon, .htaccess, manifest, ...)
    โโโ src                     # source files
    โ   โโโ components
    โ   โโโ pages
    โ   โโโ resources           # images, constants and other static resources
    โ   โโโ store               # Redux store
    โ   โ   โโโ actions         # store's actions
    โ   โ   โโโ reducers        # store's reducers
    โ   โโโ styles
    โ   โโโ tests               # all test files
    โ   โโโ types               # data interfaces
    โ   โโโ utility             # utilities functions and custom components
    โ   โโโ App.tsx
    โ   โโโ index.tsx
    โ   โโโ react-app-env.d.ts
    โ   โโโ RootComponent.tsx   # React component with all the routes
    โ   โโโ serviceWorker.ts
    โ   โโโ setupTests.ts
    โโโ .eslintrc.js
    โโโ .gitignore
    โโโ .prettierrc
    โโโ package.json
    โโโ README.md
    โโโ tsconfig.json
```

<p align="center">Bootstrapped with Create React App.</p>
