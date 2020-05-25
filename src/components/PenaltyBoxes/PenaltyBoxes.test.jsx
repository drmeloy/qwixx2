import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import PenaltyBoxes from './PenaltyBoxes';
import store from '../../store';

describe('Penalty Boxes component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><PenaltyBoxes /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
