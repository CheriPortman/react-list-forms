import React from 'react';
import PropTypes from 'prop-types';
//takes a photo property and displays an image

function Photo({ photo }) {
  return <img src={photo} />;
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired
};

export default Photo;
