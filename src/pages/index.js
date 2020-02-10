import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby";


const IndexPage = ({data}) => {
  console.log('data', data)
  return (
    <Layout>
      <SEO title="Strona główna"/>
    </Layout>
  )
};

export default IndexPage


export const pagedQuery = graphql`
    {
        allFile(filter: {relativePath: {regex: "/background/" }}) {
            edges {
                node {
                    childImageSharp {
                        fluid {
                            src
                        }
                    }
                }
            }
        }
    }

` 