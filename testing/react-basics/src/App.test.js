import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
// Assertions go here
  it('should have the `th` "Items"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<th>Items</th>)).toBe(true);
  });
});

