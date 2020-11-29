import React, { Component } from 'react';
// import ReactGoogleSlides from 'react-google-slides';

export default class Slides extends Component {
  render() {
    const isBrowser = typeof window !== `undefined`;
    const ReactGoogleSlides = isBrowser ? require('react-google-slides') : null;
    if (isBrowser) {
      return (
        <div>
          <ReactGoogleSlides
            width="800rem"
            height="480rem"
            slidesLink="https://docs.google.com/presentation/d/11Pb7aDHt38LydehkRdkVrqM-t389YLpISmbkh7H0_Is/edit?usp=sharing"
            showControls
          />
        </div>
      );
    }
    return null;
  }
}
