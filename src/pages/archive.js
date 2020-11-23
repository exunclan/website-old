import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Container from '../components/container';
import SEO from '../components/seo';

const Archive = ({ data }) => (
  <Layout>
    <SEO title="Archive" />
    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0',
        }}
      >
        <h1>Archive</h1>
        <p>Our achievements over the years.</p>
        <table>
          <tbody>
            <tr>
              <th>Year</th>
              <th>Symposium</th>
              <th>Organising School</th>
              <th>Position</th>
            </tr>
          {data.allArchiveJson.nodes.map(achievement => (
            <tr>
              <td>{achievement.year}</td>
              <td>{achievement.symposium}</td>
              <td>{achievement.organisingSchool}</td>
              <td>
                {achievement.position === "Winners" ? <strong>{achievement.position}</strong> : <span>{achievement.position}</span>}
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </Container>
  </Layout>
);

Archive.propTypes = {
  data: PropTypes.shape({
    allArchiveJson: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }).isRequired,
};

export default Archive;

export const query = graphql`
  query ArchivesQuery {
    allArchiveJson {
      nodes {
        year
        symposium
        organisingSchool
        position
      }
    }
  }
`;
