// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';

import App from './app/app';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

//import "primereact/resources/themes/vela-blue/theme.css";
//import "primereact/resources/themes/saga-blue/theme.css";
//import "primereact/resources/themes/md-light-indigo/theme.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme

import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
//import 'primeflex/primeflex.css';
import './index.css';
import './flags.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
