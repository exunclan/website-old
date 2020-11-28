import React, { useState, useEffect } from 'react';
import ReactGoogleSlides from 'react-google-slides';

function Slides() {
  const isBrowser = typeof window !== `undefined`;
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
export default Slides;
