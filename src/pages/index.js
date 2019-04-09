import React from "react"
import { Link } from "gatsby"

import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectPreview from "../components/project-preview"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  
  {
    allProjectsJson {
      edges {
        node{
          title 
          slug
          url
          description
          image {
            childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          
          }
        }
      }
    }
  
  `);

  const projects = data.allProjectsJson.edges;
  return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    {projects.map(({ node: project }) => {
      const title = project.title;
      const description = project.description;
      const slug = project.slug; 
      const imageData = project.image.childImageSharp.fluid;
      return (
    <ProjectPreview
      title={title}
      description={description}
      imageData={imageData}
      slug={slug}

      />
    );
      })}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>

  );
}
export default IndexPage
