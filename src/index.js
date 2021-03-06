import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
// import $ from 'jquery';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
