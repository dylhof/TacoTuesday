const condimentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CONDIMENTS':
      return action.condiments
    default:
      return state
  }
}

export default condimentsReducer;