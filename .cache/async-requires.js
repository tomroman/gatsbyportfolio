// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-project-js": () => import("/Users/thomasroman/Desktop/gatsbyportfolio/src/templates/project.js" /* webpackChunkName: "component---src-templates-project-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/thomasroman/Desktop/gatsbyportfolio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/thomasroman/Desktop/gatsbyportfolio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/Users/thomasroman/Desktop/gatsbyportfolio/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("/Users/thomasroman/Desktop/gatsbyportfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/thomasroman/Desktop/gatsbyportfolio/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */),
  "component---src-pages-projects-js": () => import("/Users/thomasroman/Desktop/gatsbyportfolio/src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/thomasroman/Desktop/gatsbyportfolio/.cache/data.json")

