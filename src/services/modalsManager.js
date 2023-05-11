export const OpenModal = (modal, dispatch, data) => {

  dispatch({ type: "SET_MODALS", data: { isRequestTrial: false, isRequestSuccess: false, isGetInTouch: false, isDownloadFile: false, isDownloadReport: false, isRequestCaseStudy: false, isRequestQuote: false } })

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
  }
}