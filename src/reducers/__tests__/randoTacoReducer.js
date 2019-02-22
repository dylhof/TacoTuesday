import randoTacoReducer from '../randoTacoReducer';

describe('randoTacoReducer', () => {
  it('should return the initial state', () => {
    //setup
    const expected = {};
    //execution
    const result = randoTacoReducer(undefined, {});
    //expectation
    expect(result).toEqual(expected);
  });

  it('should return the action.taco value', () => {
    //setup
    const mockTaco = {taco: 'mmmmm'}
    const mockAction = {type: 'SET_RANDO_TACO', taco: mockTaco}
    //execution
    const result = randoTacoReducer(undefined, mockAction)
    //expectation
    expect(result).toEqual(mockTaco)
  })
})