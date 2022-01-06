import React from 'react';
import Container from '../components/container';
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
                <Talk />
              </Container>
          </Layout>
      </div>
    );
  }
}

export default Talks;
