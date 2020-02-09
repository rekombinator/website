import React from 'react'
import Layout from '../components/layout'
import Table from "react-bootstrap/Table";
import {graphql } from "gatsby";
import SEO from "../components/seo";

const matches = ({data}) => {

  console.log('data', data);

  return (
    <Layout>
      <SEO title="Mecze" />
      <Table striped bordered hover responsive>
        <thead>
        <tr>
          <th>Gospodarz</th>
          <th>Gość</th>
          <th>Wynik</th>
          <th>Data</th>
        </tr>
        </thead>
        <tbody>

        {data.allDatoCmsMatch.edges.map(({node}) => {
            return (
              <tr key={node.id}>
                <td>{node.home.name}</td>
                <td>{node.away.name}</td>
                <td>{node.score}</td>
                <td>{node.date}</td>
              </tr>
            )
          }
        )}
        </tbody>
      </Table>
    </Layout>)
};

export default matches


export const pageQuery = graphql`
    query {
        allDatoCmsMatch(sort: {fields: date}) {
            edges {
                node {
                    id,
                    home {
                        name
                    }
                    away {
                        name
                    }
                    score,
                    date
                }
            }
        }
    }
`;
