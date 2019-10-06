# [beatboards.net](https://beatboards.net)

### Beat Boards is a leaderboard scoring and ranking system for custom levels on Beat Saber.

## Stack

- [Vue](https://vuejs.org/)
- [Typescript](https://www.typescriptlang.org/) to superset our javascript
- [Nuxt.js](https://nuxtjs.org) to SSR our components
- [Bulma.css](https://www.styled-components.com/) to help create our styling
- [Font awesome 5](https://fontawesome.com/) to provide icons

## Build Setup

[Yarn](https://yarnpkg.com/lang/en/) is recommended but not required.
If you're not using yarn you can change every `yarn` for (`npm`, `npm i` or `npm run`)

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Design pattern

- `UI`
  - Labels, Inputs, Buttons. Single elements with its own, contained styling. They're useless on their own, and are used only to define the [design system](https://24ways.org/2012/design-systems/) of the app.  
    It is recommended not to nest UI. If nesting is necessary here, you are probably trying to create an **Element**.

- `Elements`
  - Mixing any **UI** or other **Elements** to create a distinct section of an interface, but without logic or store. Like navbars, footers, sidebars. _Think of it like a "presentational component"._  
    You can nest elements however you think is necessary.

- `Containers`
  - Containers wraps **Elements** with data and/or logic from redux or from itself. _Think of it like a "container component"._  
    You can nest elements however you think is necessary.

- `Layout`
  - Layout components are files used by nuxt.js to define the most common "templates".
    It is not recommended to nest layouts

- `Pages`
  - Pages components are files required by nuxt.js to define the internal routes. It is also where server side logic needs to be placed  
    It is recommended only to nest pages to mirror the route url path.


## Recommended extensions

### VS code

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
