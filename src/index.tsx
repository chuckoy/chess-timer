import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Timer } from "./components/timer/timer";

ReactDOM.render(
  <React.StrictMode>
    <Timer />
  </React.StrictMode>,
  document.getElementById('root')
);