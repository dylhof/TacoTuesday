import React from 'react';
import { shallow } from 'enzyme';
import {BuildATaco, mapStateToProps} from './BuildATaco';
import uuid from 'uuid/v4';

jest.mock('uuid/v4');
uuid.mockReturnValue(1);

describe('BuildATaco', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <BuildATaco/>
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

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