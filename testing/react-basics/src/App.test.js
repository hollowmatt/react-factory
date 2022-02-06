import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
// Assertions go here
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it('should have the `th` "Items"', () => {
    expect(wrapper.contains(<th>Items</th>)).toBe(true);
  });
  it('should have a `button` element', () => {
    expect(wrapper.containsMatchingElement(<button>Add item</button>)).toBe(true);
  });
  it('`button` should be disabled', () => {
    const button = wrapper.find('button').first();
    expect(button.props().disabled).toBe(true);
  });

  describe('the user inputs some stuff', () => {
    const item = 'Vancouver';

    beforeEach(() => {
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: {value: item}
      })
    });

    it('should update the state property `item`', () => {
      expect(wrapper.state().item).toEqual(item);
    });

    it('should enable `button`', () => {
      const button = wrapper.find('button').first();
      expect(button.props().disabled).toBe(false);
    });
  });
});


