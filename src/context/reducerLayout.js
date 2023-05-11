export default function (state, action) {
  switch (action.type) {
    case 'SET_LAYOUT':
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}