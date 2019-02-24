const mixinsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MIXINS':
      return action.mixins
    default:
      return state
  }
}

export default mixinsReducer;