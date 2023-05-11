export default function (state, action) {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state,
        isNotification: true,
        notificationMessage: `Error: ${action.data.error}`,
        notificationType: "danger",
        isBussy: false
      }
    default:
      return state;
  }
}