import _ from 'lodash'
import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import App from './App';

chai.use(chaiEnzyme())


it('renders shallowly without crashing', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).to.have.descendants('div');
});

it('renders without crashing', () => {
  const wrapper = mount(<App />);

  expect(wrapper).to.have.descendants('p');
});

it('shows flag after button click', () => {
  const wrapper = mount(<App />);

  expect(wrapper).to.not.have.descendants('.flag')
  wrapper.find('button').simulate('click')
  expect(wrapper).to.have.descendants('.flag')
});

it('shows flag after button click 2', () => {
  const wrapper = mount(<App />);

  wrapper.find('button').simulate('click')
  setImmediate(() => {
    expect(wrapper).to.have.descendants('.flag')
  })
});

