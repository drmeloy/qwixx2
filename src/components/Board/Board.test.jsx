import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Board component', () => {
  it('Matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><Board /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
