const debounceEl = require('lodash.debounce');
const { defaults } = require('@pnotify/core');

import './styles.css';
import refsEl from '../src/refs.js';
import cardForm from '../templates/cardForm.hbs';
import listCountries from '../templates/listCountries.hbs';
import API from '../src/fetchCountries';

const refs = getRefs();

refs.inputEl.addEventListener('input', debounce(() => {
console.log();
}, 500));

  
