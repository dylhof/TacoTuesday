import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  let wrapper;
  beforeEach(() =>{
    wrapper = shallow(<Header/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle the showMenu property in state', () => {
    expect(wrapper.state('showMenu')).toEqual(false);
    wrapper.instance().toggleShowMenu();
    expect(wrapper.state('showMenu')).toEqual(true);
  })
});