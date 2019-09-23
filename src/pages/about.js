import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Container from '../components/container';
import Navbar from '../components/navbar';
import SEO from '../components/seo';

import styles from './about.module.css';

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

const AboutPage = () => (
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
          R.K. Puram. The word ‘Exun’ is short for Experts Unlimited, and that’s
          exactly what we are: young technology enthusiasts excelling in diverse
          fields of technology, from research, development, and programming to
          tech quizzing, debating and design.
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
      <div
        style={{
          padding: '0 0 10rem',
        }}
      >
        <h2>Event History</h2>
        <p>
          Having represented the school in various computing symposia in India
          and around the world, the club also hosts its annual computer
          symposium, Exun. Exun has been held 23 times and has been a great
          success each time.
        </p>
        <table>
          <tbody>
            <tr>
              <th>Symposium</th>
              <th>Sponsor</th>
            </tr>
            <tr>
              <td>Exun 2018</td>
              <td>
                UniRely, Athena Education, Pearl Academy, Supported by Digital
                India
              </td>
            </tr>
            <tr>
              <td>Exun 2017</td>
              <td>Bennett University, AVIT, USA Univquest, Sony</td>
            </tr>
            <tr>
              <td>Exun 2016</td>
              <td>
                Sony, Playstation, Zeiss, Bennett University, Avit, Cubelelo
              </td>
            </tr>
            <tr>
              <td>Exun 2015</td>
              <td>Intel, Unity Group, Microsoft Research, SmartEdu</td>
            </tr>
            <tr>
              <td>Exun 2014</td>
              <td>Intel, Crompton, T.I.M.E., Compton Computers (P) Limited</td>
            </tr>
            <tr>
              <td>Exun 2013</td>
              <td>Intel, InSynegy</td>
            </tr>
            <tr>
              <td>Exun 2012</td>
              <td>Intel</td>
            </tr>
            <tr>
              <td>Exun 2011</td>
              <td>Intel</td>
            </tr>
            <tr>
              <td>Exun 2010</td>
              <td>NIIT eGuru, Masonite, Xtreme Gaming</td>
            </tr>
            <tr>
              <td>Exun 2009</td>
              <td>
                Norton (Symantec), Xsys Technologies, RX Infotech Pvt. Ltd,
                Dominos Pizza
              </td>
            </tr>
            <tr>
              <td>Exun 2008</td>
              <td>Mangalayatan University</td>
            </tr>
            <tr>
              <td>Exun 2007</td>
              <td>Pavna</td>
            </tr>
            <tr>
              <td>Exun 2006</td>
              <td>HP</td>
            </tr>
            <tr>
              <td>Exun 2005</td>
              <td>Sony</td>
            </tr>
            <tr>
              <td>Exun 2004</td>
              <td>HCL Infosystems</td>
            </tr>
            <tr>
              <td>Exun 2003</td>
              <td>HCL Infosystems</td>
            </tr>
            <tr>
              <td>Exun 2002</td>
              <td>Legris</td>
            </tr>
            <tr>
              <td>Exun 2001</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Exun 2000</td>
              <td>eGurucool.com</td>
            </tr>
            <tr>
              <td>Exun 1999</td>
              <td>MantraOnline</td>
            </tr>
            <tr>
              <td>Exun 1998</td>
              <td>HCL</td>
            </tr>
            <tr>
              <td>Exun 1997</td>
              <td>NIIT</td>
            </tr>
            <tr>
              <td>Exun 1996</td>
              <td>HCL Infosystems</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  </Layout>
);

export default AboutPage;
