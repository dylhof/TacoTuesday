import baseLayersReducer from '../baseLayersReducer';

describe('baseLayersReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = [];
    //execution
    const result = baseLayersReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should return the action.setBase_layers value', () => {
    //setup
    const mockbaseLayers = [{name: 'delicous tacos!'}];
    const mockAction = {type: 'SET_BASE_LAYERS', baseLayers: mockbaseLayers}
    //execution
    const result = baseLayersReducer(undefined, mockAction)
    //expectation
    expect(result).toEqual(mockbaseLayers)
  })
})