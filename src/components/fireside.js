import React, { useState } from 'react';
import firesides from './../../data/firesides';
import styles from './fireside.module.css';
import ModalVideo from 'react-modal-video';
import youtubeThumbnail from 'youtube-thumbnail';

export default function fireside() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <h1>Exun Fireside Chat</h1>
      <h2>
        22<sup>nd</sup> November (Sunday) at 10:00 am IST
      </h2>
      <p>
        Join us for an interactive session with Exun alumni at{' '}
        <a href="exun.co/fireside">exun.co/fireside</a>. We encourage you to ask
        questions about building good products, working in technology landscape
        and much more!
      </p>
      <div className={styles.flex}>
        {firesides.map(person => (
          <div className={styles.box}>
            <img
              key={person.img}
              className={styles.img}
              src={require(`../../data/speakers/${person.img}`)}
              alt="error in the code"
            />
            <h2 key={person.img} className={styles.name}>
              {person.name}
            </h2>
            <p className={styles.post} key={person.img}>
              {person.post}
            </p>
            <p className={styles.work} key={person.img}>
              {person.work}
            </p>
            <p className={styles.company} key={person.img}>
              {person.company}
            </p>
          </div>
        ))}
      </div>
      {/* <div id="vid-box" className="vids-box">
        <img
          onClick={() => setOpen(true)}
          className="vids-img"
          src={
            youtubeThumbnail('https://www.youtube.com/watch?v=Dfg8GxPafJA').high
              .url
          }
          alt=""
        />
        <button className="vids-btn" onClick={() => setOpen(true)}>
          Exun Fireside Chat
        </button>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={'Dfg8GxPafJA'}
          onClose={() => setOpen(false)}
        />
      </div> */}
    </div>
  );
}
