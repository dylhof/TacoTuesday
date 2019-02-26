import shellsReducer from '../shellsReducer';

describe('shellsReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = [];
    //execution
    const result = shellsReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should return the action.setShells value', () => {
    //setup
    const mockShells = [{name: 'delicous tacos!'}];
    const mockAction = {type: 'SET_SHELLS', shells: mockShells}
    //execution
    const result = shellsReducer(undefined, mockAction)
    //expectation
    expect(result).toEqual(mockShells)
  })
})