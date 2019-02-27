import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import  TacoPart from '../TacoPart/TacoPart';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import {fetchRandoTaco} from '../../thunks/fetchRandoTaco';
import {fetchAllTacoParts} from '../../thunks/fetchAllTacoParts';
import {mapDispatchToProps} from './App';
import {mapStateToProps} from './App';

jest.mock('../../thunks/fetchRandoTaco')
fetchRandoTaco.mockReturnValue([{name: 'taco'}])
jest.mock('../../thunks/fetchAllTacoParts')
fetchAllTacoParts.mockReturnValue([{name: 'taco'}])


describe('App', () => {

  let wrapper
  let mockBaseLayers
  let mockMixins
  let mockSeasonings
  let mockCondiments
  let mockShells

  beforeEach(() => {
    mockBaseLayers = [{slug: 'carnitas'}]
    mockMixins = [{slug: 'lettuce'}]
    mockSeasonings = [{slug: 'salt'}]
    mockCondiments = [{slug: 'salsa'}]
    mockShells = [{slug: 'bad_ass_tortillas'}]
    wrapper = shallow(
    <App
      fetchRandoTaco={fetchRandoTaco}
      fetchAllTacoParts={fetchAllTacoParts}
      baseLayers={mockBaseLayers}
      mixins={mockMixins}
      condiments={mockCondiments}
      seasonings={mockSeasonings}
      shells={mockShells}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should find a matching taco part', () => {
    //setup
    const expected = <TacoPart tacoPart={'mixins'}/>
    //execution
    const result = wrapper.instance().findTacoPart({ match: { params: { tacoPart: 'mixins' } } })
    //expectation
    expect(result).toEqual(expected)
  });

  it.skip('should find a matching recipe', () => {
    //setup
    const slug = 'bad_ass_tortillas'
    const expected =  (<div onClick={() => this.props.history.goBack()}>
                        <RecipeCard tacoRecipe={{slug}} /> 
                      </div>)
    //execution
    const result = wrapper.instance().findTacoPartRecipe({ match: {params: {tacoPartRecipe: slug } } })
    //expectation
    expect(result).toEqual(expected)
  })

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

    it('should call dispatch with fetchAllTacoParts', () => {
      //setup
      const mockDispatch = jest.fn()
      const expected = fetchAllTacoParts()
      //execution
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchAllTacoParts()
      //expectation
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })

  describe('mapStateToProps', () => {
    it('should return an object with all state as props', () => {
      //setup
      const mockState = {
        error: 'No tacos? sad.', 
        isLoading: true,
        baseLayers: [{name: 'taco!'}],
        mixins: [{name: 'taco!'}],
        condiments: [{name: 'taco!'}],
        seasonings: [{name: 'taco!'}],
        shells: [{name: 'taco!'}],
        mockProperty: 'this is NOT a taco'
      }
      const expected = {
        error: 'No tacos? sad.', 
        isLoading: true,
        baseLayers: [{name: 'taco!'}],
        mixins: [{name: 'taco!'}],
        condiments: [{name: 'taco!'}],
        seasonings: [{name: 'taco!'}],
        shells: [{name: 'taco!'}]
      }
      //execution
      const mappedProps = mapStateToProps(mockState)
      //expectation
      expect(mappedProps).toEqual(expected)
    })
  })
})
