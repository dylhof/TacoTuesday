import React from 'react';
import { shallow } from 'enzyme';
import { BuildATacoPart } from './BuildATacoPart';
import uuid from 'uuid/v4';

jest.mock('uuid/v4');
uuid.mockReturnValue(1);

describe('BuildATacoPart', () => {
  let wrapper
  let mockTacoPart

  beforeEach(() => {
    mockTacoPart = [{name: 'yummy Taco'}, {name: 'another yum taco'}]
    wrapper = shallow(<BuildATacoPart tacoPart={mockTacoPart}
      tacoPartName={'mmm... Tacos'} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have initial state', () => {
    expect(wrapper.state('currentRecipe')).toEqual('')
  });

  it('should find a recipe and set it to state', () => {
    //setup
    const mockEvent = {target: {value: 'yummy Taco'}};
    //execution
    wrapper.instance().selectRecipe(mockEvent);
    //expectation
    expect(wrapper.state('currentRecipe')).toEqual(mockTacoPart[0])
  })
})