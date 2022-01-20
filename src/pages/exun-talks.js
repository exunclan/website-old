import React from 'react';
import Container from '../components/container';
import Fireside from '../components/fireside';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Talk2020 from '../components/talk2020';
import Talk2022 from '../components/talk2022';

class Talks extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Container>
            <Navbar />
            <Talk2022 />
            <Talk2020 />
            <div style={{ marginTop: '7rem' }}></div>
            <Fireside />
          </Container>
        </Layout>
      </div>
    );
  }
}

export default Talks;
