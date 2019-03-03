import React from "react"

import SEO from "../components/seo"
import {css} from "@emotion/core"
import { graphql, StaticQuery, Link } from "gatsby";
import Layout from "../components/layout"

const IndexPage = () => (  
  <Layout showHeader={false}>
    <SEO title="Home" keywords={[`sharepoint`, `api`, `javscript`]} />
    <section css={css`
      text-align: center;      
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      @media (min-width: 600px) {
        height: 100vh;
      }
      background: #282936;
    `}>
      <div>
        <h1 css={{
          color: '#ff7e5f',
          fontSize: '3.2rem',
          margin: '0'
        }}>SPQL</h1>
        <p
          css={{
            fontSize: '1.4rem',
            margin: '.5em 0 1.6em 0',
            color: 'white'
          }}>
            A lightweight, modern way of querying SharePoint's web services
          </p>
        <div>
          <Link
            to="/getting-started"
            css={{
              padding: '.6em 1.2em',
              border: '2px solid #ff7e5f',
              borderRadius: '4px',
              textDecoration: 'none',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 126, 95, 0.8)',
                color: 'black'
              },
              marginRight: '1em'
            }}
          >
            Get Started
          </Link>
          <Link
            to="/docs"
            css={{
              padding: '.6em 1.2em',
              border: '2px solid #ff7e5f',
              borderRadius: '4px',
              textDecoration: 'none',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 126, 95, 0.8)',
                color: 'black'
              }              
            }}
          >
            Docs
          </Link> 
        </div>       
      </div>
    </section>
    <section
      css={{
        padding: '3em 0',
        background: '#fcfcfc'
      }}
    >
    <div
      css={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.0875rem 1.45rem`        
      }}
    >
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
                fontWeight: '600'
              }}>
              {edge.node.frontmatter.title}
            </h2>
            <p
              css={{
                fontSize: '1rem',
                lineHeight: '1.5rem',
                color: '#202020',
                margin: '0'
              }}            
              >
              {edge.node.excerpt}
            </p>
          </article>
        ))}
        />   
      </div>    
    </section>
  </Layout>
)

const IndexQuery = graphql`
query {
  allMarkdownRemark(
    filter: {
      frontmatter: {id: {eq: "about"}}
    }
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