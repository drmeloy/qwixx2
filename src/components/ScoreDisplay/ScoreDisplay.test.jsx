import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ScoreDisplay from './ScoreDisplay';
import store from '../../store';

describe('Score Display component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><ScoreDisplay /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
