import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const errorMessage = error({
  text: "Too many matches found. Please enter a more specific query!",
  autoOpen: false,
  width: '400px',
  minHeight: '40px',
  delay: 2000,
  sticker: false, 
  destroy:false, 
});

export {errorMessage};

