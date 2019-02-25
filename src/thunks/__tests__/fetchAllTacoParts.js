import { fetchAllTacoParts } from '../fetchAllTacoParts';
import * as actions from '../../actions';
import { promised } from 'q';

describe('fetchAllTacoParts', () => {
  let mockDispatch
  let mockTacoPartRecipes 

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockTacoPartRecipes = [{name: 'yay! Taco'}, {name: 'taco!'}]
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        json: () => Promise.resolve(mockTacoPartRecipes),
        ok: true
      }))
  })

  it('calls dispatch with the setLoading(true) action', () => {
    //setup
    const thunk = fetchAllTacoParts()
    //execution
    thunk(mockDispatch)
    //expectation
    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true))
  });

  it('calls dispatch with the setBase_layers action and setLoading(false) if response ok', async () => {

    //setup
    const thunk = fetchAllTacoParts();
    //execution 
    await thunk(mockDispatch)
    //expectation
    expect(mockDispatch).toHaveBeenCalledWith(actions.setBase_layers(mockTacoPartRecipes))
    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false))
  });

  it('calls dispatch with the setError action', async () => {
    //setup
    window.fetch = jest.fn().mockImplementation(() => 
      promised.resolve({
        ok: false
      }))
      const thunk = fetchAllTacoParts()
    //execution
    await thunk(mockDispatch)
    //expetation
    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('ERROR Tacos Not Loading!'))
  })
})