import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';

import styles from './index.module.css';

const Header = () => (
  <header
    style={{
      borderBottom: '1px solid #eaeaef',
      padding: '3rem 0 0',
    }}
    className={styles.header}
  >
    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            color: '#456484',
          }}
        >
          Exun 2019
        </h2>
        <h1
          style={{
            color: '#298bf5',
          }}
        >
          Hello, world.
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
        <button type="button">Request an invite</button>
      </div>
    </Container>
  </header>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
  </Layout>
);

export default IndexPage;
