import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';

import ResourceList from '../components/resources-pages-render';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const linkstyle = {
  color: '#298bf5',
};

const LearningPage = () => (
  <Layout>
    <SEO title="Learning" />
    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0 5rem',
        }}
      >
        <h1>Learning Resources</h1>
        <p>
          An archive of resources assembled by current Exun members and alumni
          to help newcomers navigate the fields of&nbsp;
          {ResourceList()} Before you begin, you may find it useful to learn{' '}
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1ON_SZS_0msRgfo8sB7jjtHDztXiqV17c8TmW22q-MSI/edit?usp=sharing"
            style={linkstyle}
          >
            how to learn
          </a>
          .
        </p>
        <p>
          Let us know if you like the resources{' '}
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/1awwX8ejmJE6Hvf4sfTyPI7weqZAYzYycnzFrCkygE4g/edit?usp=sharing"
            style={linkstyle}
          >
            here
          </a>
          .
        </p>
      </div>
    </Container>
  </Layout>
);

export default LearningPage;
