import * as actions from './index'

describe('actions', () => {
  it('should have a type of SET_LOADING and a bool', () => {
    //setup
    const expectedAction = { type: 'SET_LOADING', isLoading: true}
    //execution
    const result = actions.setLoading(true)
    //expectation
    expect(result).toEqual(expectedAction)
  })

  it('should have a type of SET_RANDO_TACO and a taco', () => {
    //setup 
    const mockTaco = {baseLayer: 'yummmm'}
    const expectedAction = { type: 'SET_RANDO_TACO', taco: mockTaco}
    //execution
    const result = actions.setRandoTaco(mockTaco)
    //expectation
    expect(result).toEqual(expectedAction)
  })

  it('should have a SET_ERROR and an error message', () => {
    //setup
    const mockError = 'Why are all the tacos gone!?'
    const expectedAction = { type: 'SET_ERROR', error: mockError }
    //execution
    const result = actions.setError(mockError)
    //expectation
    expect(result).toEqual(expectedAction);
  })
})