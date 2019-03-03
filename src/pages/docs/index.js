import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import SiteAPI from "../../components/siteApi"
import ListAPI from "../../components/listApi"

const Docs = () => {
  return (
    <Layout>
      <SEO title="SPQL API" />
      <SiteAPI />
      <ListAPI />
    </Layout>
  )
}

export default Docs