export default function (state, action) {
  switch (action.type) {
    case 'SET_SETTINGS':
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}