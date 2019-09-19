import React from 'react';

import Container from '../components/container';
import Navbar from '../components/navbar';

export default () => (
  <header
    style={{
      borderBottom: '1px solid #eaeaef',
      padding: '3rem 0 0',
    }}
  >
    <Container>
      <Navbar />
      <div
        style={{
          padding: '10rem 0',
        }}
      >
        <h1>Exun Clan</h1>
        <h2
          style={{
            marginTop: '-1rem',
            marginBottom: '2rem',
            maxWidth: 550,
            fontWeight: 400,
          }}
        >
          Founded in 1992, Exun is the technology club at Delhi Public School
          R.K. Puram.
        </h2>
        <p>
          The word ‘Exun’ is short for Experts Unlimited, and that’s exactly
          what we are: young technology enthusiasts excelling in diverse fields
          of technology, from research, development, and programming to tech
          quizzing, debating and design.
        </p>
        <p>
          Under the mentorship of Mr. Mukesh Kumar, its founder &
          teacher-in-charge, Exun has emerged as the foremost high- school
          technology club of India, with its members winning inter- school,
          national, and international competitions on a regular basis. Exun is a
          forty member organization, bestowing less than 2% of the student body
          with its prestigious membership.
        </p>
        <p>
          With an alumni network of 300 individuals at companies and
          universities around the world, Exun is well connected to the
          contemporary technology landscape.
        </p>
      </div>
    </Container>
  </header>
);
