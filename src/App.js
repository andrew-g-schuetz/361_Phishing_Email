import React, { useState } from "react";
import axios from "axios";
import './App.css';
import logo from './logo.jpg';

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [apiResponse, setApiResponse] = useState("");

  // Fetch data from API
  const fetchApiData = async () => {
    try {
      const response = await axios.post("", {
        emailContent
      });
      setApiResponse(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setApiResponse("Error fetching data from API");
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo"/>
        <h1>Phishing Email Detector</h1>
      </header>
      <main>
        <textarea
          className="email-input"
          placeholder="Paste the email content here..."
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
        />
        <button className="fetch-button" onClick={fetchApiData}>
          Detect Phishing
        </button>
        <div className="api-response">
          <h3>Response:</h3>
          <pre>{apiResponse}</pre>
        </div>
      </main>
    </div>
  );
}

export default App;
