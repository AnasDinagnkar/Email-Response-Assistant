import React, { useState } from "react";
import EmailInput from "./components/EmailInput";
import ResponseOutput from "./components/ResponseOutput";
import "./App.css";

function App() {
  const [emailText, setEmailText] = useState("");
  const [response, setResponse] = useState("");

  const handleGenerateResponse = () => {
    // Placeholder logic – replace with backend or local AI later
    const mockResponse = "Thanks for your email! We'll get back to you shortly.";
    setResponse(mockResponse);
  };

  return (
    <div className="app">
      <h1>Email Response Assistant</h1>
      <EmailInput emailText={emailText} setEmailText={setEmailText} />
      <button onClick={handleGenerateResponse}>Generate Response</button>
      <ResponseOutput response={response} />
    </div>
  );
}

export default App;
