import React from "react"
import { Link } from "gatsby"

import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

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
    <h1>Projects</h1>
    
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
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
    
  </Layout>

  );
}
export default IndexPage
