// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Si vous souhaitez mesurer les performances de votre application, vous pouvez passer une fonction
// pour enregistrer les résultats (par exemple: reportWebVitals(console.log))
// ou envoyer à un point de terminaison d'analyse. En savoir plus: https://bit.ly/CRA-vitals
reportWebVitals();

