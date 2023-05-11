export default function (state, action) {
  switch (action.type) {
    case 'SET_POS':
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}