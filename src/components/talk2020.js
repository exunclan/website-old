import React from 'react';

import Card from './card';

import styles from './talks.module.css';

import list from '../../data/talk2020data';

import parse from 'html-react-parser';

class List2021 extends React.Component {
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
          <h1 style={{ marginTop: '6rem', fontSize: "3.5rem" }}>Exun Talks 2020</h1>
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

export default List2021;
