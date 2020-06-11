import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import NumberBox from './NumberBox';
import { getBlues } from '../../redux/selectors/boxSelectors';

describe('Number Box component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Provider store={store}><NumberBox color={'red'} num={4} selector={getBlues} /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});
