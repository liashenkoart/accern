export default function (state, action) {
  switch (action.type) {
    case 'SET_MODALS':
      return {
        ...state,
        ...action.data
      }
    default:
      return state;
  }
}