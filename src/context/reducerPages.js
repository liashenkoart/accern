export default function (state, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}