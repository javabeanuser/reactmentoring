import Item from '../../components/item'

import React from 'react';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should render correctly with no props', () => {
  const component = shallow(<Item src="1" alt="1" title="1" gender="1" releaseDate="1"/>);  
  expect(component).toMatchSnapshot();
});