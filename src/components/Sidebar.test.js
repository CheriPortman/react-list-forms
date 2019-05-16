import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar Componenet', () => {
  it('renders the sidebar', () => {
    const wrapper = shallow(
      <Sidebar>
        <a href="lsldofij">Testing</a>
      </Sidebar>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
