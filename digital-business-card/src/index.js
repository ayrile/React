import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const element =(
  <div>
    <img className="react-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" alt="react logo" width="40"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps.including
        mobile apps
      </li>
    </ul>
  </div>
);

const container = document.getElementById('root');
const root =ReactDOM.createRoot(container);
root.render(element);

