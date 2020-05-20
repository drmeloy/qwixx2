import React from 'react';
import { shallow } from 'enzyme';
import DiceDisplay from './DiceDisplay';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Dice Display component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><DiceDisplay /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
