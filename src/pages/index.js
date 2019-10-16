import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';
import EventList from '../components/event-list';
import InviteForm from '../components/invite-form';

import styles from './index.module.css';

const Header = () => (
  <header
    style={{
      borderBottom: '1px solid #eaeaef',
    }}
    className={styles.header}
  >
    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0 4rem',
        }}
      >
        <h2
          style={{
            color: '#456484',
          }}
        >
          19-20 October
        </h2>
        <h1
          style={{
            marginTop: '-1rem',
            color: '#298bf5',
          }}
          className={styles.heading}
        >
          Exun 2019
        </h1>
        <p
          style={{
            color: '#7c828a',
            maxWidth: 600,
          }}
        >
          Exun 2019 is the 24th edition of Exun’s annual event. <br />
          Do you have what it takes to participate?
        </p>
        <InviteForm />
      </div>
    </Container>
  </header>
);

const Splash = ({ fluid }) => (
  <div
    style={{
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    <Img
      objectFit="cover"
      fluid={fluid}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1,
      }}
    />
    <div
      style={{
        color: '#fff',
        padding: '20rem 0',
      }}
    >
      <Container>
        <h1 style={{ color: '#fff' }}>Bigger and better than ever before.</h1>
        <div style={{ maxWidth: 600 }}>
          Exun has been organizing its flagship event for two decades. With Exun
          2019, we’re continuing its legacy as a national event open to
          participants from around the country.
        </div>
      </Container>
    </div>
  </div>
);
Splash.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fluid: PropTypes.object.isRequired,
};

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Splash fluid={data.file.childImageSharp.fluid} />
      <Container>
        <div style={{ marginTop: '6rem' }}>
          <EventList />
        </div>
      </Container>
    </Layout>
  );
};
IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query IndexQuery {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(duotone: { highlight: "#298bf5", shadow: "#192550" }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
