import React from "react"

import SEO from "../components/seo"
import {css} from "@emotion/core"
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/layout"

const IndexPage = () => (  
  <Layout>
    <SEO title="Home" keywords={[`sharepoint`, `api`, `javscript`]} />
    <section css={css`
      text-align: center;      
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40vh;
      @media (min-width: 600px) {
        height: 60vh;
      }
    `}>
      <div>
        <h1 css={{
          color: '#ff7e5f',
          fontSize: '3.2rem',
          margin: '0'
        }}>SPQL</h1>
        <p
          css={{
            fontSize: '1.2rem',
            margin: '.5em 0 1.6em 0'
          }}>
            A lightweight, modern way of querying SharePoint's web services
          </p>      
        <a
          href="/getting-started"
          css={{
            padding: '.6em 1.2em',
            border: '2px solid #ff7e5f',
            borderRadius: '4px',
            textDecoration: 'none',
            color: 'black',
            '&:hover': {
              backgroundColor: 'rgba(255, 126, 95, 0.8)'
            }
          }}
        >
          Get Started
        </a>
      </div>
    </section>
    <section>
      <StaticQuery
        query={IndexQuery}
        render={data => data.allMarkdownRemark.edges.map((edge, i) => (
          <article
            css={{
              marginBottom: '1.2em'
            }}
            key={i}
          >
            <h2
              css={{
                 marginTop: '0',          
                 marginBottom: '.1em',
                 fontWeight: '600'
            }}>
              {edge.node.frontmatter.title}
            </h2>
            <p
              css={{
                fontSize: '1rem',
                color: '#202020',
                margin: '0'
              }}            
            >
              {edge.node.excerpt}
            </p>
          </article>
        ))}
      />   
    </section>  
  </Layout>
)

const IndexQuery = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "//content/about/"}}
    sort: {fields: [frontmatter___order], order: ASC}
    ){
      edges {
        node {
          frontmatter {
            title
          }
          excerpt(pruneLength: 500)
        }
      }
    }
  }
  `

  export default IndexPage