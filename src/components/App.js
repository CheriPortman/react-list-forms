import React from 'react';
import PhotoAlbum from './photos/PhotoAlbum';

import threeLoves from '../assets/three-loves.jpg';
import stitch from '../assets/stitch-on-blue.jpg';

export default function App() {
  const photos = [
    threeLoves,
    stitch
  ];

  return (
    <>
      <PhotoAlbum photos={photos}/>
    </>
  );
}
