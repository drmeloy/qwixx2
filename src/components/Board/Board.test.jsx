import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board component', () => {
  it('Matches snapshot', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper).toMatchSnapshot();
  });
});
