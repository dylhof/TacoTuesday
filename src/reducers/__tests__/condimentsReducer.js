import condimentsReducer from '../condimentsReducer';

describe('condimentsReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = [];
    //execution
    const result = condimentsReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should return the action.setCondiments value', () => {
    //setup
    const mockCondiments = [{name: 'delicous tacos!'}];
    const mockAction = {type: 'SET_CONDIMENTS', condiments: mockCondiments}
    //execution
    const result = condimentsReducer(undefined, mockAction)
    //expectation
    expect(result).toEqual(mockCondiments)
  })
})