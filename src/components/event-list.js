import React from 'react';

import Card from './card';

import styles from './event-list.module.css';

import events from '../../data/events';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      search: '',
    };
    this.toggle = this.toggle.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ active: !prevState.active, search: '' }));
  }

  handleSearchBarChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  renderInput() {
    const { active, search } = this.state;
    if (!active) return null;
    return (
      <input
        type="text"
        style={{
          padding: '2rem',
          border: '1px solid #e1e1e1',
          borderRadius: 0,
          marginBottom: '3rem',
          width: '100%',
        }}
        placeholder="Search..."
        value={search}
        onChange={this.handleSearchBarChange}
      />
    );
  }

  render() {
    const { active, search } = this.state;
    const query = new RegExp(search, 'gi');

    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <div>
            <h1 style={{ marginBottom: 0 }}>Events</h1>
          </div>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            style={{
              color: '#298bf5',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontSize: '0.8em',
              cursor: 'pointer',
            }}
            onClick={this.toggle}
          >
            View&nbsp;
            {active ? 'Less' : 'All'}
          </div>
        </div>
        {this.renderInput()}
        <div className={styles.eventList}>
          {events
            .slice(0, active ? events.length : 3)
            .filter(event => event.name.match(query))
            .map(event => (
              <Card key={event.name}>
                <h5>
                  <a
                    href={
                      event.shortlink
                        ? `https://exun.co/18/${event.shortlink}`
                        : `https://exun.co/18/${event.name
                            .toLowerCase()
                            .replace(' ', '')
                            .replace('-', '')}`
                    }
                  >
                    {event.name}
                  </a>
                </h5>
                <div>{event.description}</div>
              </Card>
            ))}
        </div>
      </div>
    );
  }
}

export default Events;
