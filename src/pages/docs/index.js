import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import SiteAPI from "../../components/siteApi"
import ListAPI from "../../components/listApi"

const Docs = () => {
  return (
    <Layout>
      <SEO title="SPQL API" />
      <section
        css={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `1.0875rem 1.45rem`        
        }} 
      >
        <SiteAPI />
      </section>
      <section
        css={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `1.0875rem 1.45rem`        
        }} 
      >
        <ListAPI />
      </section>
    </Layout>
  )
}

export default Docs