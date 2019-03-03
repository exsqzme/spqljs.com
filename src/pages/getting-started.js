import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GettingStarted = () => {
  return (
    <Layout>
      <SEO title="Getting Started" />
      <section
        css={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `1.0875rem 1.45rem`        
        }} 
      >
        <StaticQuery
            query={gettingStartedQuery}
            render={data => data.allMarkdownRemark.edges.map(edge => (
                <div key={edge.node.id}>
                  <h1>{edge.node.frontmatter.title}</h1>
                  <div dangerouslySetInnerHTML={{__html: edge.node.html}} />
                </div>
              ))
            }
          />    
      </section>  
    </Layout>
  )
}

const gettingStartedQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {id: {eq: "start"}}
      }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          id
          html
        }
      }
    }
  }
  `

export default GettingStarted