import React from 'react';
import {shallow} from 'enzyme';
import { Home, mapStateToProps, mapDispatchToProps } from './Home';
import { fetchRandoTaco } from '../../thunks/fetchRandoTaco'
import uuid from 'uuid/v4';

jest.mock('uuid/v4');
uuid.mockReturnValue(1);
jest.mock('../../thunks/fetchRandoTaco')
fetchRandoTaco.mockReturnValue([{name: 'taco'}])

describe('Home', () => {
  let wrapper
  let mockRandoTaco

  beforeEach(() => {
    mockRandoTaco = { baseLayer: { name: 'best taco', slug: 'best_taco', recipe: 'this is a great recipe \n it is yummy'}}
    wrapper = shallow(
      <Home randoTaco = {mockRandoTaco} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps', () => {
    //setup
    const mockState = {
      randoTaco: {baseLayer: {name: 'yummy!'}},
      baseLayer: [{name: 'tasty taco'}]
    }
    const expected = {
      randoTaco: {baseLayer: {name: 'yummy!'}},
    }
    //execution
    const mappedProps = mapStateToProps(mockState)
    //expectation
    expect(mappedProps).toEqual(expected)
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with fetchRandoTaco', () => {
      //setup
      const mockDispatch = jest.fn()
      const expected = fetchRandoTaco()
      //execution 
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchRandoTaco()
      //expectation
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    });
  })
});