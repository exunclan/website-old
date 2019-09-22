import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Container from '../components/container';
import Navbar from '../components/navbar';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Not Found" />

    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0',
        }}
      >
        <h1>404 Not Found</h1>
        <p>Whatever you’re looking for may have been moved or deleted.</p>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
