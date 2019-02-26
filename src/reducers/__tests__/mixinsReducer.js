import mixinsReducer from '../mixinsReducer';

describe('mixinsReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = [];
    //execution
    const result = mixinsReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should return the action.setMixins value', () => {
    //setup
    const mockMixins = [{name: 'delicous tacos!'}];
    const mockAction = {type: 'SET_MIXINS', mixins: mockMixins}
    //execution
    const result = mixinsReducer(undefined, mockAction)
    //expectation
    expect(result).toEqual(mockMixins)
  })
})