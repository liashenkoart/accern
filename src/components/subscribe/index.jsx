import React from "react";
import Icon from "../../components/icon";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Button } from "react-bootstrap";
import { settings } from "../../data/settings";

import "./Subscribe.scss"

const Subscribe = ({ data }) => {

  const onSubmit = (e, subscribe) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData(e.target);

    let fields = {};

    formData.forEach((value, key) => {
      fields[key] = value;
    });

    subscribe(fields);
  }

  return (
    <div className={`subscribe ${data.className ? data.className : ""}`}>
      <div className="text-label text-white text-center text-md-left">{data.title}</div>
      <div className="text-gray-small mb-4 text-center text-md-left">{data.description}</div>
      <MailchimpSubscribe
        url={settings.subscribe}
        render={({ subscribe, status, message }) => (
          <div className="position-relative">
            <form onSubmit={(e) => onSubmit(e, subscribe)} className={`subscribe-form ${status === "success" ? "hide" : ""}`}>
              <div className="subscribe-input-container">
                <input name="EMAIL" type="email" required placeholder={data.placeholder} />
                <Button size="sm" variant="primary" disabled={status === "sending"} type="submit">{data.button}</Button>
                <div className={`subscribe-notification ${status === "error" ? "active" : ""}`} dangerouslySetInnerHTML={{ __html: message }}></div>
              </div>
              {status === "sending" && <div className="subscribe-loader"><Icon variant="loader" /></div>}
            </form>
            <div className={`subscribe-message ${status === "success" ? "show" : ""}`}>{data.message}</div>
          </div>
        )}
      />
    </div>
  );
}

export default Subscribe;