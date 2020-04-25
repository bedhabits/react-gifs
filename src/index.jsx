import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import SearchBar from './components/search_bar';

import '../assets/stylesheets/application.scss';


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
