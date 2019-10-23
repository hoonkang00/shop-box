function productStylesReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_CURRENT_PRODUCT_STYLES":
      return action.styles;
    default:
      return state;
  }
}

export default productStylesReducer;
