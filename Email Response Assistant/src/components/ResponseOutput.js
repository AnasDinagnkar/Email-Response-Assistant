import React from "react";

const ResponseOutput = ({ response }) => {
  return (
    <div>
      <h2>Suggested Response:</h2>
      <div className="response-box">{response}</div>
    </div>
  );
};

export default ResponseOutput;
