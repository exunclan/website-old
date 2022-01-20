import React from 'react';

import Card from './card';

import styles from './talks.module.css';

import data from '../../data/talk2022data';

import parse from 'html-react-parser';

const List2022 = () => {
  return (
    <div>
      <div>
        <h1 style={{ fontSize: '3.5rem', marginTop: '3rem' }}>
          Exun Talks 2021-22
        </h1>
        <p>
          Exun Talks are a series of semi-professional sessions relating to
          technology, with speakers including Exun and DPS RKP alumni, YouTubers
          among others. We have an exciting lineup in store and more speakers to
          be confirmed soon! Register at{' '}
          <a target="_blank" className={styles.btn} href="//exun.co/talkreg">
            exun.co/talkreg
          </a>{' '}
          to receive all information and latest updates regarding Exun Talks. To
          attend any talk, you can visit{' '}
          <a target="_blank" className={styles.btn} href="//exun.co/talks">
            exun.co/talks
          </a>{' '}
          at the scheduled time.
        </p>
      </div>

      <div>
        {data.reverse().map(list => (
          <div className={styles.responsive}>
            <div className={styles.lefttalk}>
              <img
                className={styles.talksimg}
                src={require(`../../data/speakers/${list.image}`)}
                alt="#error in the code"
              />
              <h2 className={styles.talksh2}>{list.name}</h2>
            </div>
            <div className={styles.righttalk}>
              <h1 className={styles.talksh1}>{list.title}</h1>
              <h2>{list.date}</h2>
              <p>{parse(list.para)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List2022;
