const baseLayersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BASE_LAYERS':
      return action.baseLayers
    default:
      return state
  }
}

export default baseLayersReducer;