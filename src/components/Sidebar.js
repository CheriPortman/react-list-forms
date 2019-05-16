import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.css';

//sidebar has children that render in a nav element
function Sidebar({ children }) {
  return (
    <nav className={styles.Sidebar}>
      {children}
    </nav>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
