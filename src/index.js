import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// Перезагружает только текущий компонент, а не всю страницу
// if (module.hot) {
//   module.hot.accept();
// }
