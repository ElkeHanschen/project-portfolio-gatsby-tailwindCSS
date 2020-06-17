<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
    <img src="src/images/avatar_elle.jpeg" alt="Avatar Elle" height="100" width="100"/>
</p>

<h1 align="center">
  Elle's Portfolio - WiP
</h1>

This project is my portfolio site.

_It is built from scratch - no previous content or concept, no previous website._

_The project is based on [Gatsby](https://www.gatsbyjs.org/docs/) and [tailwindcss](https://tailwindcss.com/)._


## How to install Gatsby?

There's actually two ways as there are two "starter packs".  
The very simple one: [Gatsby Hello World Repository](https://github.com/gatsbyjs/gatsby-starter-hello-world)  
A more elaborate one: [Gatsby Starter Default Repository](https://github.com/gatsbyjs/gatsby-starter-default)  

My Project is based on the more elaborate "Starter Default" one, as this one brings a bit more content out of the box.

- `cd` into your preferred local directory and run `gatsby new YOUR-PROJECT-NAME https://github.com/gatsbyjs/gatsby-starter-default`
- `cd` into your new site directory, `cd YOUR-PROJECT-NAME`
- run `gatsby develop` 
    - this will start up your gatsby-site in development mode
- your site is now running at `http://localhost:8000/`
- gatsby also provides a second link: `http://localhost:8000/___graphql` 
    - this site can be used to experiment with querying data
- run `gatsby build` to create a production ready build
    - this will create a production ready version of the site
    - this will output all of the static HTML that you would put on your server, production ready JavaScript and CSS bundles
- once the site is built, run (or actually serve) `gatsby serve`  
-  run `gatsby clean` to clean the cache  
- please also see [Gatsby cheat sheet](https://www.gatsbyjs.org/docs/cheat-sheet/)

## Add tailwindcss
- install tailwindcss as devDependency, run `npm install tailwindcss --save-dev`  
- add a tailwindcss configuration file, run `npx tailwind init` 
    - this will create the (optional) `tailwind.config.js`  
    - you can now add customized styling via `tailwind.config.js` to add on top of tailwindcss styling  

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
## Configure Gatsby PostCSS to use tailwindcss  
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

#### Tip
- use `npx tailwind init tailwind-full.config.js --full` to take a look at the full blown content of the config file  
- __do *NOT* add your custom changes to that specific file!__  
- add that file to your `.gitignore`!

## See more information about how to get tailwindcss into Gatsby here:
[tailwindcss in Gatsby](https://www.gatsbyjs.org/docs/tailwind-css/)
  
## Add Purgecss to your project - **DID NOT WORK** - WiP  
- `npm install gatsby-plugin- purgecss`
- add gatsby-plugin-purgecss to your `gatsby-config.js`
- [Purgecss on npm](https://www.npmjs.com/package/purgecss)  
- [Purgecss](https://www.purgecss.com/)  
- [Purgecss on TailwindCSS video tutorial](https://tailwindcss.com/course/optimizing-for-production)

## See more Gatsby commands here:
[Gatsby commands](https://www.gatsbyjs.org/docs/gatsby-cli/)

## See more information about Gatsby here:
[Gatsby](https://www.gatsbyjs.org/)  
[Gatsby Tutorial](https://www.gatsbyjs.org/tutorial/)  
[Gatsby Documentation](https://www.gatsbyjs.org/docs/)  
[Gatsby example projects](https://www.gatsbyjs.org/starters/?v=2)  
[Gatsby on npm](https://www.npmjs.com/package/gatsby)

## See more information about tailwindcss here:
[tailwindcss](https://tailwindcss.com/)  
[tailwindcss screencasts](https://tailwindcss.com/screencasts/)  
[tailwindcss / Adam Wathan on YouTube](https://www.youtube.com/channel/UCy1H38XrN7hi7wHSClfXPqQ/playlists)  
[tailwindcss on npm](https://www.npmjs.com/package/tailwindcss)
