import { fetchRandoTaco } from '../fetchRandoTaco';
import { setLoading, setRandoTaco, setError } from '../../actions';

describe('fetchRandoTaco', () => {
  let mockDispatch
  let mockTaco

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockTaco = {baseLayer: {name: 'mmmm'}}
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      json: () => Promise.resolve(mockTaco),
      ok: true
    }))
  })

  it('calls dispatch with the setLoading(true) action', () => {
    //setup 
    const thunk = fetchRandoTaco();
    //execution
    thunk(mockDispatch);
    //expectation
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(true));
  });

  it('calls dispatch with the setLoading(false) and setRandoTaco(taco) action if response is ok', async () => {
    //setup
    const thunk = fetchRandoTaco();
    //execution
    await thunk(mockDispatch);
    //expectation
    expect(mockDispatch).toHaveBeenCalledWith(setLoading(false))
    expect(mockDispatch).toHaveBeenCalledWith(setRandoTaco(mockTaco))
  });

  it('calls dispatch with the setError', async () => {
    //setup
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        ok: false,
      }))
    const thunk = fetchRandoTaco();
    //execution
    await thunk(mockDispatch)
    //expectation
    expect(mockDispatch).toHaveBeenCalledWith(setError('Taco bout embarassing! We have encountered a taco loading error :('))
  });


})