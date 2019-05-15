import React from 'react';
import { shallow } from 'enzyme';
import Photo from './Photo';

describe('Photo Componenet', () => {
  it('renders a photo', () => {
    const wrapper = shallow(<Photo photo="../../assets/stitch-on-blue.jpg" />);
    expect(wrapper).toMatchSnapshot();
  });
});
