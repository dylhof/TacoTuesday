import loadingReducer from '../loadingReducer';

describe('loadingReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = false;
    //execution
    const result = loadingReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should return the action.isLoading value', () => {
    //setup
    const mockAction = {type: 'SET_LOADING', isLoading: true}
    const expected = true
    //execution
    const result = loadingReducer(undefined, mockAction);
    //expectation
    expect(result).toEqual(expected)
  })
})