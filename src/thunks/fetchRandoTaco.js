import { fetchCall } from '../utils/Api';
import { setLoading, setRandoTaco, setError} from '../actions'

export const fetchRandoTaco = () => {
  const proxyURL = 'https://cors-anywhere.herokuapp.com/'
  const tacoURL = 'http://taco-randomizer.herokuapp.com/random'
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const randoTaco = await fetchCall(proxyURL + tacoURL);
      console.log('fromfetchrandoTaco', randoTaco)
      dispatch(setLoading(false));
      dispatch(setRandoTaco(randoTaco));
    } catch (error) {
      dispatch(setError(
        'Taco bout embarassing! We have encountered a taco loading error :('
      ))
    }
  }
}