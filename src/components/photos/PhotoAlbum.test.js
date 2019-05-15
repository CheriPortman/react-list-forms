import React from 'react';
import { shallow } from 'enzyme';
import PhotoAlbum from './PhotoAlbum';

describe('Photo Album Componenet', () => {
  it('renders a photo album!', () => {
    const photos = [
      '/fake',
      '/fayke'
    ];

    const wrapper = shallow(<PhotoAlbum title="My Photos" photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
