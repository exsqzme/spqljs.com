import React from "react"
import { graphql, StaticQuery } from "gatsby"

const SiteAPI = () => {
  return (
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
  )
}

const gettingStartedQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {id: {eq: "site-services"}}
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

export default SiteAPI