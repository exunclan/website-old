import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { ToastProvider } from 'react-toast-notifications';

import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';
import EventList from '../components/event-list';
import InviteForm from '../components/invite-form';
import Sponsors from '../components/sponsors';

import styles from './index.module.css';

const Grid = ({ children }) => <div className={styles.grid}> {children} </div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

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
          19 - 20 October
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
          Exun 2019 was the 24th edition of Exun’s annual event. <br />
          Enter your email to stay tuned for updates.
        </p>
        <ToastProvider>
          <InviteForm />
        </ToastProvider>
        <Sponsors />
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
        <h1 style={{ color: '#fff' }}> Bigger and better than ever before. </h1>
        <div style={{ maxWidth: 600, marginBottom: '3rem' }}>
          Exun has been organizing its flagship event for two decades. With Exun
          2019, we continued its legacy as a national event open to participants
          from around the country.
        </div>
      </Container>
    </div>
  </div>
);
Splash.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fluid: PropTypes.object.isRequired,
};

const quickLinkStyle = {
  color: '#298bf5',
};

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Splash fluid={data.file.childImageSharp.fluid} />
      <Container>
        <div style={{ marginTop: '6rem' }}>
          <h1 style={{ marginBottom: '2rem' }}> Quick Links </h1>
          <ul>
            <li>
              <a style={quickLinkStyle} href="//exun.co/19/schedule">
                Schedule
              </a>
            </li>
            <li>
              <a style={quickLinkStyle} href="//lnexun.com">
                ln(Exun)
              </a>
              (Results)
            </li>
            <li>
              <a style={quickLinkStyle} href="//facebook.com/ExunClan">
                Facebook Page
              </a>
            </li>
            <li>
              <a style={quickLinkStyle} href="//exun.co/19/coc">
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>
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
