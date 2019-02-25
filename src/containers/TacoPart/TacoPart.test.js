import React from 'react';
import { shallow } from 'enzyme';
import { TacoPart, mapStateToProps } from './TacoPart';


describe('TacoPart', () => {
  let wrapper;
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
    mockShells = [{slug: 'bad_ass_tortillas'}, {slug: 'naan'}]
    wrapper = shallow(
      <TacoPart
      baseLayers={mockBaseLayers}
      mixins={mockMixins}
      condiments={mockCondiments}
      seasonings={mockSeasonings}
      shells={mockShells}
      tacoPart='shells'/> )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should shift the carousel', () => {
    const mockEvent = {event: {target: {classList: {0: 'left'}, parentElement:{children: {1: {scrollLeft: 0}}}}} }
    wrapper.instance().shiftTaco(mockEvent)
    expect(mockEvent.target.parentElement.children[1].scrollLeft).toBe(-600)
  });

  describe('mapStateToProps', () => {
    it('should return an object with all correct props', () => {
      //setup
      const mockState = {
        baseLayers: [{name: 'taco!'}],
        mixins: [{name: 'taco!'}],
        condiments: [{name: 'taco!'}],
        seasonings: [{name: 'taco!'}],
        shells: [{name: 'taco!'}],
        error: 'Sorry no tacos'
      }
      const expected = {
        baseLayers: [{name: 'taco!'}],
        mixins: [{name: 'taco!'}],
        condiments: [{name: 'taco!'}],
        seasonings: [{name: 'taco!'}],
        shells: [{name: 'taco!'}],
      }
      //execution
      const mappedProps = mapStateToProps(mockState)
      //expectation
      expect(mappedProps).toEqual(expected)
    })
  })
})