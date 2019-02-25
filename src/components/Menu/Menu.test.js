import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu'

describe('Menu', () => {
  const mocktoggleShowMenu = jest.fn()

  const wrapper = shallow(
    <Menu 
    toggleShowMenu={mocktoggleShowMenu}
    showMenu={true}/>)

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
