import React from 'react';
import { shallow } from 'enzyme';
import Photos from './Photos';

describe('Photos Component', () => {
  it('renders photos', () => {
    const photos = [
      'src/assets/fanno-creek-fun.jpg',
      'src/assets/dragon-hoard.jpg',
      'src/assets/crater-lake-dan.jpg'
    ];
    const wrapper = shallow(<Photos photos={photos} />);
    expect(wrapper).toMatchSnapshot();
  });
});
