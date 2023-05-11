export default function (state, action) {
  switch (action.type) {
    case 'SET_USER_MAIL':
      return action.data
    default:
      return state;
  }
}