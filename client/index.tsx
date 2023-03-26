/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './React/App';
import './styles/tailwind.css';
import './styles/aboutPage.scss';
import './styles/codeBlock.scss';
import './styles/loginModal.scss';
import './styles/mainPage.scss';
import './styles/mountainLogo.scss';
import './styles/navBar.scss';
import './styles/saveDatabaseModal.scss';
import './styles/flow.scss';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <HashRouter>
      <App />
    </HashRouter>,
  );
}
