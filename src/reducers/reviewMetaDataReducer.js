function reviewMetaDataReducer(state={}, action){
    switch (action.type) {
        case 'UPDATE_REVIEW_METADATA':
          return action.data
        default:
          return state
      }
}


export default reviewMetaDataReducer