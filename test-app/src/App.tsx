import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import logo from './logo.svg';
import './App.css';

import { useDetectAdBlock } from 'adblock-detect-react';
import { detect } from 'detect-browser';

function App() {
  useEffect(() => {
    const { SNOWPACK_PUBLIC_GOOGLE_TRACKING_ID } = import.meta.env;
    ReactGA.initialize(SNOWPACK_PUBLIC_GOOGLE_TRACKING_ID);
    ReactGA.pageview(window.location.origin);
  }, []);

  const adBlockDetected = useDetectAdBlock();
  const browser = detect();

  return (
    <div className="App">
      <header className="App-header">
        <div>{JSON.stringify(browser)}</div>
        {adBlockDetected && (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <div>{'An ad-blocker has been detected!'}</div>
            <a
              className="App-link"
              href="https://www.npmjs.com/package/adblock-detect-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              using adblock-detect-react
            </a>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
