export function userReducer(state = null, action) {
  switch (action) {
    case "LOGIN":
      return action.payload;

    default:
      return state;
  }
}
