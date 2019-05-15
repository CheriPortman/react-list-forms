import React from 'react';
import Photos from './photos/Photos';

import threeLoves from '../assets/three-loves.jpg';
import stitch from '../assets/stitch-on-blue.jpg';

export default function App() {
  const photos = [
    threeLoves,
    stitch
  ];

  return (
    <>
      <Photos photos={photos}/>
    </>
  );
}
