import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 <ul>
   <li>Sunday</li>
   <li>Monday</li>
   <li>Tuesday</li>
   <li>Wedneday</li>
   <li>Thursday</li>
   <li>Friday</li>
   <li>Saturday</li>
 </ul>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
