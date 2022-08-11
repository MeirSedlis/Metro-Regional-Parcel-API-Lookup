const initialState = [];

export default function lookupReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_RESULTS":
      return action.payload;
    case "RESET_RESULTS":
      return [];
    default:
      return state;
  }
}




