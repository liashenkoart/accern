import React, { useContext } from "react";
import { Context } from "../../context/context";

import RequestTrial from "./requesttrial";
import RequestSuccess from "./success/requestSuccess";
import GetInTouch from "./getintouch";
import DownloadFile from "./downloadfile";
import DownloadReport from "./downloadreport";
import RequestCaseStudy from "./requestcasestudy";
import RequestAccess from "./requestAccess";
import RequestQuote from "./requestquote";
import AwsSuccess from "./success/awsSuccess";
import DownloadWhitepaper from "./downloadWhitepaper";
import Video from "./video";
import FindYourIdea from "./findYourIdea";

const Modals = () => {

  const { modals } = useContext(Context);

  return (
    <>
      {modals.isRequestTrial && <RequestTrial />}
      {modals.isRequestSuccess && <RequestSuccess />}
      {modals.isGetInTouch && <GetInTouch />}
      {modals.isDownloadFile && <DownloadFile />}
      {modals.isDownloadReport && <DownloadReport />}
      {modals.isRequestCaseStudy && <RequestCaseStudy />}
      {modals.isRequestAccess && <RequestAccess />}
      {modals.isRequestQuote && <RequestQuote />}
      {modals.isAwsSuccess && <AwsSuccess />}
      {modals.isDownloadWhitepaper && <DownloadWhitepaper />}
      {modals.isFindYourIdea && <FindYourIdea />}
      {modals.isVideo && <Video />}
    </>
  );
}

export default Modals;