import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Card from '../components/card';
import Container from '../components/container';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import SEO from '../components/seo';

import styles from './members.module.css';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const MembersPage = ({ data }) => (
  <Layout>
    <SEO title="Members" />
    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0',
        }}
      >
        <h1>Members</h1>
        <p>
          Exun’s members form an elite team of technology enthusiasts, with
          skills ranging from design and programming to quizzing and hardware.
        </p>
        {data.allMembersJson.nodes.map(cls => (
          <div key={cls.year}>
            <h2 style={{ marginTop: '5rem' }}>{` ${cls.year}`}</h2>
            <Grid>
              {cls.members.map(member => (
                <Card key={member.name}>
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
MembersPage.propTypes = {
  data: PropTypes.shape({
    allMembersJson: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }).isRequired,
};

export default MembersPage;

export const query = graphql`
  query MembersQuery {
    allMembersJson {
      nodes {
        year
        members {
          name
          role
        }
      }
    }
  }
`;
