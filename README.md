<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
    <img src="src/images/avatar_elle.jpeg" alt="Avatar Elle" height="100" width="100"/>
</p>

<h1 align="center">
  WIP - Portfolio site - Gatsby and tailwindCSS
</h1>

### What is this about?

- portfolio site, built with `gatsby.js`, `tailwindCSS`
- implemented "design" is only used to have things more visual and to figure out how tailwindCSS works
- the project is based on the [Gatsby Starter Default Repository](https://github.com/gatsbyjs/gatsby-starter-default) and [tailwindcss](https://tailwindcss.com/)

### How to run this?

- clone the project
- `cd` into the project
- run `npm install`
- run `gatsby develop`, this serves the project on localhost
- in case that's not working/throws errors, run `gatsby clean`, `gatsby build`, `gatsby develop`

### Helpful sources, see end of README

- [See more Gatsby here](#Gatsby)
- [See more tailwindCSS here](#tailwindCSS)

## How did this project came together?

### How to generally install a new Gatsby project?

There's two ways to install gatsby, as there are two "starter packs".

- the very simple one: [Gatsby Hello World Repository](https://github.com/gatsbyjs/gatsby-starter-hello-world)
- a more elaborate one: [Gatsby Starter Default Repository](https://github.com/gatsbyjs/gatsby-starter-default)

My project is based on the more elaborate "Starter Default" one, as this one brings a bit more content out of the box.

How to install this:

- `cd` into your preferred local directory and run `gatsby new YOUR-PROJECT-NAME https://github.com/gatsbyjs/gatsby-starter-default`
- `cd` into your new site directory, `cd YOUR-PROJECT-NAME`
- run `gatsby develop`
  - this will start up your gatsby-site in development mode and runs it at `http://localhost:8000/`
- gatsby also provides a second link: `http://localhost:8000/___graphql`
  - this site can be used to experiment with querying data
- run `gatsby build` to create a production ready build
  - this will output all of the static HTML that you would put on your server, production ready JavaScript and CSS bundles
- once the site is built, run (or actually serve) `gatsby serve`
- run `gatsby clean` to clean the cache, if encountering issues/errors

## Add tailwindCSS

- install tailwindCSS as devDependency, run `npm install tailwindcss --save-dev`
- add a tailwindCSS configuration file, run `npx tailwind init`
  - this will create the (optional) `tailwind.config.js`
  - you can now add customized styling via `tailwind.config.js` to add on top of out of the box tailwindCSS styling

#### Tip

- use `npx tailwind init tailwind-full.config.js --full` to take a look at the full blown content of the tailwindCSS config file
- **do _NOT_ add your custom changes to that specific file!**
- add that file to your `.gitignore`!

## Add the Gatsby PostCSS plugin

- install the Gatsby PostCSS plugin gatsby-plugin-postcss, run `npm install --save gatsby-plugin-postcss`
- include the Gatsby PostCSS plugin in your `gatsby-config.js` file like follows:
  ```
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
        },
        ...
    ]
  ```

## Configure Gatsby PostCSS to use tailwindCSS

- create a `postcss.config.js` in your project's root folder
- run `npm install postcss-import` (plugin for handling `@import` statements with PostCSS)
- run `npm install autoprefixer` (tailwind doesn't automatically add vendor prefixes, it's recommended to use autoprefixer)
- put this into the `postcss.config.js`
  ```
    module.exports = {
        plugins: [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
        ]
    }
  ```
- check `http://localhost:8000/` your project should still run, without building the files again

## Add Purgecss to your project - **DID NOT WORK** - WiP

- `npm install gatsby-plugin- purgecss`
- add gatsby-plugin-purgecss to your `gatsby-config.js`
- [Purgecss on npm](https://www.npmjs.com/package/purgecss)
- [Purgecss](https://www.purgecss.com/)
- [Purgecss on TailwindCSS video tutorial](https://tailwindcss.com/course/optimizing-for-production)

## Gatsby

- [Gatsby home](https://www.gatsbyjs.org/)
- [Gatsby docs](https://www.gatsbyjs.org/docs/)
- [Gatsby commands](https://www.gatsbyjs.org/docs/gatsby-cli/)
- [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/)
- [Gatsby example projects](https://www.gatsbyjs.org/starters/?v=2)
- [Gatsby on npm](https://www.npmjs.com/package/gatsby)
- [Gatsby cheat sheet](https://www.gatsbyjs.org/docs/cheat-sheet/)

## tailwindCSS

- [how to get tailwindCSS into Gatsby](https://www.gatsbyjs.org/docs/tailwind-css/)
- [tailwindCSS home](https://tailwindcss.com/)
- [tailwindCSS screencasts](https://tailwindcss.com/screencasts/)
- [tailwindCSS / Adam Wathan on YouTube](https://www.youtube.com/channel/UCy1H38XrN7hi7wHSClfXPqQ/playlists)
- [tailwindCSS on npm](https://www.npmjs.com/package/tailwindcss)
