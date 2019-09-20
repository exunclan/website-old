import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';
import Card from '../components/card';

import contacts from '../../data/contacts';

import styles from './contact.module.css';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0',
        }}
      >
        <h1>Contact Us</h1>
        <Grid>
          {contacts.map(contact => (
            <Card>
              <div
                style={{
                  fontWeight: '600',
                  fontSize: '1.1em',
                }}
              >
                {contact.name}
              </div>
              <div
                style={{
                  fontSize: '0.9em',
                }}
              >
                {contact.role}
              </div>
              <p style={{ marginTop: '1rem', marginBottom: 0 }}>
                <a href={`tel:${contact.number}`}>{contact.number}</a>
                <br />
                <a href={`MAILTO:${contact.email}`}>{contact.email}</a>
              </p>
            </Card>
          ))}
        </Grid>
      </div>
    </Container>
  </Layout>
);

export default ContactPage;
