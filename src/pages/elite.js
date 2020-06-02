import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';

import styles from './about.module.css';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const ELitePage = () => (
  <Layout>
    <SEO title="e-Lite" />
    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0 5rem',
        }}
      >
        <h1>e-Lite 2020</h1>
        <p>
          Exun Clan is back with its annual inductions: e-Lite 2020, and this
          year, we’re going fully online! We have incredible things planned to
          help you showcase your passion for tech, expand your skillset, and
          push yourself to your very best. Don’t miss out on an incredible
          experience, as an e-Lite participant and a potential member of the
          Exun family.
        </p>
        <h3>To register, sign in with your school email:</h3>
        <a href="https://elite-reg.now.sh/google">
          <button style={{ marginTop: '20px' }} href="">
            Sign in with @dpsrkp.net
          </button>
        </a>
      </div>
    </Container>
  </Layout>
);

export default ELitePage;
