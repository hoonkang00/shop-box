function selectedStyleReducer(state = 0, action) {
  switch (action.type) {
    case "UPDATE_SELECTED_STYLE_INDEX":
      return action.selectedIndex;
    default:
      return state;
  }
}

export default selectedStyleReducer;
