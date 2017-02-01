import _ from 'lodash'
import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import App from './App';
import Big from './Big';

chai.use(chaiEnzyme())


it('renders shallowly without crashing', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).to.have.descendants('div');
});

it('renders without crashing', () => {
  const wrapper = mount(<App />);

  expect(wrapper).to.have.descendants('p');
});

it('renders big component crashing', () => {
  const wrapper = mount(<Big />);

  expect(wrapper).to.have.descendants('p');
});
