import React, { useState } from 'react';
import Sidebar from './Sidebar';
import styles from './App.css';

export default function App() {
  const [selected, updateSelected] = useState('home');
  const content = {
    home: 'here there be dogs',
    about: 'rephrase the question',
    blog: 'someday you shall see my wisdom',
    contact: 'think really hard, maybe it will work'
  };

  return (
    <section className={styles.App}>
      <Sidebar select={updateSelected}>
        <a onClick={() => updateSelected('home')} href="#">Home</a>
        <a onClick={() => updateSelected('about')} href="#">About</a>
        <a onClick={() => updateSelected('blog')} href="#">Blog</a>
        <a onClick={() => updateSelected('contact')} href="#">Contact</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </section>
  );
}

