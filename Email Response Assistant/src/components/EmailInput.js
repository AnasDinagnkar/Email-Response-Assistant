import React from "react";

const EmailInput = ({ emailText, setEmailText }) => {
  return (
    <div>
      <textarea
        rows="10"
        cols="60"
        value={emailText}
        onChange={(e) => setEmailText(e.target.value)}
        placeholder="Paste your email here..."
      />
    </div>
  );
};

export default EmailInput;
