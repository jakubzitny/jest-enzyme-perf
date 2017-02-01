import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders shallowly without crashing', () => {
  shallow(<App />);
});

it('renders without crashing', () => {
  mount(<App />);
});
