const debounce = require('lodash.debounce');
const { defaults } = require('@pnotify/core');

import './styles.css';
import API from './fetchCountries.js';

const inputEl = document.querySelector('.input');

inputEl.addEventListener('input', debounce((e) => {
  console.log(e.target.value);
  }, 2000))


  
