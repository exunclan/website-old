import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';

export default () => (
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
          Thank you for registering! We will be e-mailing invitations to the
          Google Classroom(s) for the department(s) you have registered for,
          within 24 hours. All announcements and details regarding the
          inductions for that department will be posed in the classroom.
        </p>
        <p>
          If you wish to participate in another department and did not select it
          in the form, or if you have any other questions, please email us at
          exun@dpsrkp.net.
        </p>
        <p>Looking forward to having you with us for e-Lite 2020!</p>
      </div>
    </Container>
  </Layout>
);
