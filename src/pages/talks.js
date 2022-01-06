import React from 'react';
import Container from '../components/container';
import Fireside from '../components/fireside';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Talk from '../components/talk'

class Talks extends React.Component {
  render() {
    return (
      <div>
          <Layout>
              <Container>
                <Navbar />
                <div style={{marginTop: "7rem"}}></div>
                <Fireside />
                <Talk />
                <Fireside />
              </Container>
          </Layout>
      </div>
    );
  }
}

export default Talks;
