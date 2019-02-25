import { fetchCall } from '../utils/Api'
import * as actions from '../actions'

export const fetchAllTacoParts = () => {
  const proxyURL = 'https://cors-anywhere.herokuapp.com/'
  const tacoURL = 'http://taco-randomizer.herokuapp.com/'
  const tacoParts = ['base_layers', 'mixins', 'seasonings', 'condiments', 'shells']
  
  return async dispatch => {
    try {
      tacoParts.forEach(async tacoPart => {
      const tacoPartRecipes = await fetchCall(`${proxyURL}${tacoURL}${tacoPart}`)
      switch(tacoPart) {
        case 'base_layers':
          dispatch(actions.setBaseLayers(tacoPartRecipes))
          break;
        case 'mixins':
          dispatch(actions['setMixins'](tacoPartRecipes))
          break;
        case 'seasonings':
          dispatch(actions.setSeasonings(tacoPartRecipes))
          break;
        case 'condiments':
          dispatch(actions.setCondiments(tacoPartRecipes))
          break;
        case 'shells':
          dispatch(actions.setShells(tacoPartRecipes))
          break;
        default:
          break;
      }
      })
    } catch (error) {
      dispatch(actions.setError('ERROR Tacos Not Loading!'))
    }
  }
}