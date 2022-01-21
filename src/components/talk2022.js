import React from 'react';

import Card from './card';

import styles from './talks.module.css';

import list from '../../data/talk2022data';

import parse from 'html-react-parser';

class List2022 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ active: !prevState.active }));
  }

  render() {
    const { active } = this.state;
    return (
      <div>
        <div>
          <h1 style={{ marginTop: '6rem', fontSize: '3.5rem' }}>
            Exun Talks 2022
          </h1>
          <p>
            Exun Talks are a series of semi-professional sessions relating to
            technology, with speakers including Exun and DPS RKP alumni,
            YouTubers among others. We have an exciting lineup in store and more
            speakers to be confirmed soon! Register at{' '}
            <a style={{ color: '#2977F5' }} href="exun.co/talkreg">
              exun.co/talkreg
            </a>{' '}
            to receive all information and latest updates regarding Exun Talks.
            To attend any talk, you can visit{' '}
            <a style={{ color: '#2977F5' }} href="exun.co/exuntalks">
              exun.co/exuntalks
            </a>{' '}
            at the scheduled time.
          </p>
        </div>

        <div
          style={{
            color: '#298bf5',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontSize: '0.8em',
            cursor: 'pointer',
            textAlign: 'right',
          }}
          onClick={this.toggle}
        >
          View&nbsp;
          {active ? 'Less' : 'All'}
        </div>
        <div>
          {list.slice(0, active ? list.length : 1).map(list => (
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
  }
}

export default List2022;
