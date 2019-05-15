import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

// take array of photos and create a photo for each
// display all Photo componenets in a ul

function Photos({ photos }) {
  const photoList = photos.map(photo => {
    return (
      <li key={photo}>  
        <Photo photo={photo} />
      </li>
    );
  });

  return (
    <ul>
      {photoList}
    </ul>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
