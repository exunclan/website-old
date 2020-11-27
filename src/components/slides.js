import React from 'react';
import ReactGoogleSlides from 'react-google-slides';

function Slides() {
  if (window !== undefined) {
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
  } else {
    return <h1>LOL</h1>;
  }
}
export default Slides;
