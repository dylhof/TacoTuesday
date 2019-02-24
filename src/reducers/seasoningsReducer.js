const seasoningsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEASONINGS':
      return action.seasonings
    default:
      return state
  }
}

export default seasoningsReducer;