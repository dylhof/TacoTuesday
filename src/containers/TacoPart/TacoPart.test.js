import React from 'react';
import { shallow } from 'enzyme';
import { TacoPart, mapStateToProps } from './TacoPart';
import uuid from 'uuid/v4';

jest.mock('uuid/v4');
uuid.mockReturnValue(1);

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
    const event = {target: 
      {classList: {
        contains() {return ['left']}},
       parentElement:
       {children: [{},{scrollLeft: 0}],
       childNodes: ['', { srollLeft: 0 }]}
    }}

    wrapper.instance().shiftTaco(event)
    wrapper.instance().shiftTaco(event)
    expect(event.target.parentElement.children[1].scrollLeft).toBe(-600)
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