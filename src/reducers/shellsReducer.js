const shellsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHELLS':
      return action.shells
    default:
      return state
  }
}

export default shellsReducer;