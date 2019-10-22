
function productInfoReducer(state={}, action){
    switch (action.type) {
        case 'UPDATE_CURRENT_PRODUCT':
          return action.data
        default:
          return state
      }
}


export default productInfoReducer