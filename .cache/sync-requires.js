const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-js": hot(preferDefault(require("/Users/thomasroman/Desktop/gatsbyportfolio/src/templates/project.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/thomasroman/Desktop/gatsbyportfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/thomasroman/Desktop/gatsbyportfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/thomasroman/Desktop/gatsbyportfolio/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/thomasroman/Desktop/gatsbyportfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/thomasroman/Desktop/gatsbyportfolio/src/pages/projects.js")))
}

