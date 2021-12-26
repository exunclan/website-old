import React from 'react';

export default {
  title: <h1>Frequently Asked Questions</h1>,
  rows: [
    {
      title: (
        <span style={{ color: '#456484' }}>
          Where are the competitions listed? What about the schedule?
        </span>
      ),
      content: (
        <>
          <p>
            {/* TODO Schedule Link */}
            You can find complete descriptions of competitions on our{' '}
            <a
              href="//reg.exun.co/invite"
              target="_blank"
              style={{ color: '#2977f5' }}
            >
              Events
            </a>{' '}
            page. The schedule will be available soon.
          </p>
        </>
      ),
    },
    {
      title: (
        <span style={{ color: '#456484' }}>
          I have a doubt or query about participation in the symposium. How can
          I get it resolved?
        </span>
      ),
      content: (
        <>
          <p>
            Please address any queries to our email{' '}
            <a
              href="mailto:exun@dsprkp.net"
              target="_blank"
              style={{ color: '#2977f5' }}
            >
              exun@dpsrkp.net
            </a>
            — our team will get back to you at the earliest. You can also use
            the{' '}
            <a
              href="//exun.co/discord"
              target="_blank"
              style={{ color: '#2977f5' }}
            >
              Discord server
            </a>{' '}
            if you have joined (you should!), or message us on any of our social
            media profiles.
          </p>
        </>
      ),
    },
    {
      title: (
        <span style={{ color: '#456484' }}>
          Do I need prerequisite knowledge for participation in competitions?
          Will there be workshops organised?
        </span>
      ),
      content: (
        <>
          <p>
            Participants aren't required to have any prerequisite knowledge
            while participating, so we recommend you try your hand at all events
            that interest you. We assure you an unforgettable experience.
          </p>
          <p>
            Workshops will only be conducted for the Girls in Tech event, and no
            other event.
          </p>
        </>
      ),
    },
    {
      title: (
        <span style={{ color: '#456484' }}>
          Why was I disqualified? Can I appeal?
        </span>
      ),
      content: (
        <>
          <p>
            All participants are expected to maintain decorum and not indulge in
            inappropriate, offensive, degrading or prohibited behaviour, in
            accordance with{' '}
            <a
              href="//exun.co/code"
              target="_blank"
              style={{ color: '#2977f5' }}
            >
              symposium code
            </a>
            . All decisions taken by club management are final and binding.
          </p>
        </>
      ),
    },
  ],
};
