import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import {Global, css} from "@emotion/core"
import Header from "./header"

import '../../theme/prism/css/dracula-prism.css'
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Global
        styles={css`
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

          html {
            font: calc(1vw + 0.5em) 'Source Sans Pro', sans-serif;
            box-sizing: border-box;
            overflow-y: scroll;
            color: #282936;
          }
          body {             
            margin: 0;                       
            margin-top: 50px;
          }
          * {
            box-sizing: inherit;
          }
          *:before {
            box-sizing: inherit;
          }
          *:after {
            box-sizing: inherit;
          }
          pre {
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            margin-bottom: 1.45rem;
            font-size: 0.85rem;
            line-height: 1.42;
            background: hsla(0, 0%, 0%, 0.04);
            border-radius: 3px;
            overflow: auto;
            word-wrap: normal;
            padding: .5rem 1rem !important;
          }          
          code {
            font-size: 0.8rem;
            padding: .5rem
            line-height: 1.45rem;
          }          
          code {
            background-color: hsla(0, 0%, 0%, 0.04);
            border-radius: 3px;
            font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
              "Liberation Mono", Menlo, Courier, monospace;
            padding: 0;
            padding-top: 0.2em;
            padding-bottom: 0.2em;
          }
          pre code {
            background: none;
            line-height: 1.42;
          }
          code:before,
          code:after,
          tt:before,
          tt:after {
            letter-spacing: -0.2em;
            content: " ";
          }
          pre code:before,
          pre code:after,
          pre tt:before,
          pre tt:after {
            content: "";
          }
          h1 {
            font-size: 2.2rem;
          }            
          h2 {
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: .6em;
          }                
        `} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `1.0875rem 1.45rem`
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
