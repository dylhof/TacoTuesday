const randoTacoReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RANDO_TACO':
      return action.taco
    default:
      return state
  }
}

export default randoTacoReducer;