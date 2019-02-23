import React from 'react';
import {shallow} from 'enzyme';
import { Home } from './Home';

describe('Home', () => {
  let wrapper
  let mockRandoTaco

  beforeEach(() => {
    mockRandoTaco = { baseLayer: { name: 'best taco', slug: 'best_taco', recipe: 'this is a great recipe \n it is yummy'}}
    wrapper = shallow(
      <Home randoTaco = {mockRandoTaco} />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})