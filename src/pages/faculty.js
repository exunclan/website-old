import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Container from '../components/container';
import Card from '../components/card';
import SEO from '../components/seo';

import styles from './faculty.module.css';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const FacultyPage = ({ data }) => (
  <Layout>
    <SEO title="Faculty" />
    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0',
        }}
      >
        <h1>Faculty</h1>
        <p>The Exun faculty forms the bedrock of all of its activities.</p>
        {data.allFacultyJson.nodes.map(department => (
          <div key={department.title}>
            <h2 style={{ marginTop: '5rem' }}>{department.title}</h2>
            <Grid>
              {department.members.map(member => (
                <Card key={member.name}>
                  <Img
                    fixed={member.image.childImageSharp.fixed}
                    style={{
                      // height: 80,
                      // width: 80,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                    }}
                  />
                  <div
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1em',
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      fontSize: '0.9em',
                    }}
                  >
                    {member.role}
                  </div>
                </Card>
              ))}
            </Grid>
          </div>
        ))}
      </div>
    </Container>
  </Layout>
);
FacultyPage.propTypes = {
  data: PropTypes.shape({
    allFacultyJson: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }).isRequired,
};

export default FacultyPage;

export const query = graphql`
  query FacultyQuery {
    allFacultyJson {
      nodes {
        title
        members {
          name
          role
          image {
            childImageSharp {
              fixed(width: 80, height: 80, cropFocus: CENTER) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;
