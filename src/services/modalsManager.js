export const OpenModal = (modal, dispatch, data) => {

  dispatch({
    type: "SET_MODALS", data: {
      isRequestTrial: false,
      isRequestSuccess: false,
      isGetInTouch: false,
      isDownloadFile: false,
      isDownloadReport: false,
      isRequestCaseStudy: false,
      isRequestQuote: false,
      isRequestAccess: false,
      isAwsSuccess: false,
      isDownloadWhitepaper: false,
      isVideo: false,
      data: null,
    }
  })

  switch (modal) {
    case "request":
      dispatch({ type: "SET_MODALS", data: { isRequestTrial: true } })
      break;
    case "request-success":
      dispatch({ type: "SET_MODALS", data: { isRequestSuccess: true } })
      break;
    case "getInTouch":
      dispatch({ type: "SET_MODALS", data: { isGetInTouch: true } })
      break;
    case "downloadFile":
      dispatch({ type: "SET_MODALS", data: { isDownloadFile: true, data: data } })
      break;
    case "downloadReport":
      dispatch({ type: "SET_MODALS", data: { isDownloadReport: true, data: data } })
      break;
    case "requestCaseStudy":
      dispatch({ type: "SET_MODALS", data: { isRequestCaseStudy: true, data: data } })
      break;
    case "requestQuote":
      dispatch({ type: "SET_MODALS", data: { isRequestQuote: true, data: data } })
      break;
    case "requestAccess":
      dispatch({ type: "SET_MODALS", data: { isRequestAccess: true, data: data } })
      break;
    case "awsSuccess":
      dispatch({ type: "SET_MODALS", data: { isAwsSuccess: true, data: data } })
      break;
    case "downloadWhitepaper":
      dispatch({ type: "SET_MODALS", data: { isDownloadWhitepaper: true, data: data } })
      break;
    case "video":
      dispatch({ type: "SET_MODALS", data: { isVideo: true, data: data } })
      break;
  }
}