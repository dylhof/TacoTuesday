import errorReducer from '../errorReducer';

describe('errorReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = '';
    //execution
    const result = errorReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should return the action.setError value', () => {
    //setup
    const mockError = 'Taco bout embarassing';
    const mockAction = {type: 'SET_ERROR', error: mockError}
    //execution
    const result = errorReducer(undefined, mockAction)
    //expectation
    expect(result).toEqual(mockError)
  })
})