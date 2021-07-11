import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Events from '../components/events';

import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';

import alumni from '../../data/alumni.json';

import styles from './about.module.css';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const AboutPage = () => {
  const [alumniCount, setAlumniCount] = useState(330);

  useEffect(() => {
    let n = 0;
    alumni.map(alum => (n += alum.alumni.length));
    setAlumniCount(10 * Math.floor(n / 10));
  }, []);

  return (
    <Layout>
      <SEO title="About" />
      <Container>
        <Navbar />
        <div
          style={{
            padding: '10rem 0 5rem',
          }}
        >
          <h1>Exun Clan</h1>
          <p>
            Founded in 1992, Exun is the technology club at Delhi Public School
            R.K. Puram. The word ‘Exun’ is short for Experts Unlimited, and
            that’s exactly what we are: young technology enthusiasts excelling
            in diverse fields of technology, from research, development, and
            programming to tech quizzing, debating and design.
          </p>
          <p>
            Under the mentorship of Mr. Mukesh Kumar, its founder &
            teacher-in-charge, Exun has emerged as the foremost high- school
            technology club of India, with its members winning inter- school,
            national, and international competitions on a regular basis. Exun is
            a forty member organization, bestowing less than 2% of the student
            body with its prestigious membership.
          </p>
          <p>
            With an alumni network of {alumniCount}+ individuals at companies
            and universities around the world, Exun is well connected to the
            contemporary technology landscape.
          </p>
        </div>
        <div
          style={{
            padding: '0 0 10rem',
          }}
        >
          <h2>Event History</h2>
          <p>
            Having represented the school in various computing symposia in India
            and around the world, the club also hosts its annual computer
            symposium, Exun. Exun has been held 24 times and has been a great
            success each time.
          </p>
          <Events/>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutPage;
