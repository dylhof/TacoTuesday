import { fetchCall } from '../utils/Api'
import * as actions from '../actions'

export const fetchAllTacoParts = () => {
  const proxyURL = 'https://cors-anywhere.herokuapp.com/'
  const tacoURL = 'http://taco-randomizer.herokuapp.com/'
  const tacoParts = ['base_layers', 'mixins', 'seasonings', 'condiments', 'shells']
  return async dispatch => {
    try {
      dispatch(actions.setLoading(true))
      tacoParts.forEach(async tacoPart => {
        const actionName = 'set'+ tacoPart[0].toUpperCase() + tacoPart.slice(1)
        const tacoPartRecipes = await fetchCall(`${proxyURL}${tacoURL}${tacoPart}`)
        dispatch(actions[actionName](tacoPartRecipes))
      })
      dispatch(actions.setLoading(false))
    } catch (error) {
      dispatch(actions.setError('ERROR Tacos Not Loading!'))
    }
  }
}