import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import './_reset.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                          

import ScrollToTop from './Common/ScrollToTop';
         
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

