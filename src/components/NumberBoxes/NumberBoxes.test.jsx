import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import NumberBoxes from './NumberBoxes';

describe('Number Boxes component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><NumberBoxes /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
