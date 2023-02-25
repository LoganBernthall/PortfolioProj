import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, Switch, Route } from "react-router-dom";



import App from './App';
import Education from './Education';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Switch>  
      <StrictMode>
        <App />
        <Education />
      </StrictMode>
    </Switch>
  </Router>
);
