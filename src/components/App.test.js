import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App Componenet', () => {
  it('renders the app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
