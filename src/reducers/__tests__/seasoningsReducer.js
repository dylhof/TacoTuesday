import seasoningsReducer from '../seasoningsReducer';

describe('seasoningsReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = [];
    //execution
    const result = seasoningsReducer(undefined, {})
    //expectation
    expect(result).toEqual(expected)
  })

  it('should return the action.setSeasonings value', () => {
    //setup
    const mockSeasonings = [{name: 'delicous tacos!'}];
    const mockAction = {type: 'SET_SEASONINGS', seasonings: mockSeasonings}
    //execution
    const result = seasoningsReducer(undefined, mockAction)
    //expectation
    expect(result).toEqual(mockSeasonings)
  })
})