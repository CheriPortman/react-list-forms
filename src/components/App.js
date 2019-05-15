import React from 'react';
import PhotoAlbum from './photos/PhotoAlbum';
import Header from './header/Header';
import Footer from './footer/Footer';

import threeLoves from '../assets/three-loves.jpg';
import stitch from '../assets/stitch-on-blue.jpg';
import mystery1 from '../assets/mystery1.jpg';
import pb from '../assets/peanut-butter-dipped.jpg';
import fanno from '../assets/fanno-creek-fun.jpg';
import dragon from '../assets/dragon-hoard.jpg';

export default function App() {
  const photos = [
    threeLoves,
    stitch,
    mystery1,
    pb,
    fanno,
    dragon
  ];

  return (
    <>
      <Header />
      <PhotoAlbum photos={photos}/>
      <Footer />
    </>
  );
}
