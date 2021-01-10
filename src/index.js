import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { ContactCtx, ContactService } from './context/ContactsService';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <ContactService>
        <App />
      </ContactService>
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
