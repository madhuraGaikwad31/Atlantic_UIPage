import React from 'react';
import "@dellstorage/dell-design-react-common/main.css";
import ReactDOM from 'react-dom';
import './index.css';

// Clarity & DDRC
import "@webcomponents/custom-elements/custom-elements.min.js";
import "@clr/icons/clr-icons-lite.min.js";
import "@clr/icons/clr-icons.min.css";
import "@clr/ui/clr-ui.min.css"
import "@clr/icons/shapes/technology-shapes.js";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

