import * as actions from './index'

describe('actions', () => {
  let mockTacoPart
  beforeEach(() => {
    mockTacoPart = [{name:'yumm taco'}]
  });

  it('should have a type of SET_LOADING and a bool', () => {
    //setup
    const expectedAction = { type: actions.SET_LOADING, isLoading: true}
    //execution
    const result = actions.setLoading(true)
    //expectation
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SET_RANDO_TACO and a taco', () => {
    //setup 
    const mockTaco = {baseLayer: 'yummmm'}
    const expectedAction = { type: actions.SET_RANDO_TACO, taco: mockTaco}
    //execution
    const result = actions.setRandoTaco(mockTaco)
    //expectation
    expect(result).toEqual(expectedAction)
  });

  it('should have a SET_ERROR and an error message', () => {
    //setup
    const mockError = 'Why are all the tacos gone!?'
    const expectedAction = { type: actions.SET_ERROR, error: mockError }
    //execution
    const result = actions.setError(mockError)
    //expectation
    expect(result).toEqual(expectedAction);
  });

  it('should have a SET_BASE_LAYERS type and a baselayer array', () => {
    //setup
    const expectedAction = { type: actions.SET_BASE_LAYERS, baseLayers: mockTacoPart}
    //execution
    const result = actions.setBase_layers(mockTacoPart)
    //expectation
    expect(result).toEqual(expectedAction)
  });

  it('should have a SET_MIXINS type and a mixins array', () => {
    //setup
    const expectedAction = { type: actions.SET_MIXINS, mixins: mockTacoPart}
    //execution
    const result = actions.setMixins(mockTacoPart)
    //expectation
    expect(result).toEqual(expectedAction);
  });

  it('should have a SET_SEASONINGS type and a seasonings array', () => {
    //setup
    const expectedAction = { type: actions.SET_SEASONINGS, seasonings: mockTacoPart}
    //execution
    const result = actions.setSeasonings(mockTacoPart)
    //expectation
    expect(result).toEqual(expectedAction);
  });

  it('should have a SET_CONDIMENTS type and a condiments array', () => {
    //setup
    const expectedAction = {type: actions.SET_CONDIMENTS, condiments: mockTacoPart}
    //execution
    const result = actions.setCondiments(mockTacoPart)
    //expectation
    expect(result).toEqual(expectedAction)
  });

  it('should have a SET_SHELLS type and a shells array', () => {
    //setup
    const expectedAction = {type: actions.SET_SHELLS, shells: mockTacoPart}
    //execution
    const result = actions.setShells(mockTacoPart)
    //expectation
    expect(result).toEqual(expectedAction)
  })
});