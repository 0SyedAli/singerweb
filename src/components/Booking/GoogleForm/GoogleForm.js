import React from "react";
import "./GoogleForm.css";
import { Container } from "react-bootstrap";

const GoogleForm = () => {
  const formConfig = {
    loadingText: "khaaa",
    formURL: (
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfI5CzFHlVFADyPvr1OxQRW9A6iUHzSe6mMFOaWCKKMnNi6iA/viewform?embedded=true"
        width="640"
        height="947"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    ),
  };

  return (
    <div className="GoogleForm">
      <Container>
        <h1>Hello Public</h1>
        <h2>Google Forms</h2>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfI5CzFHlVFADyPvr1OxQRW9A6iUHzSe6mMFOaWCKKMnNi6iA/viewform?embedded=true"
          width="640"
          height="947"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Container>
    </div>
  );
};

export default GoogleForm;
