import debounce from "lodash.debounce";
import "./styles.css";
import { refs } from "./refs.js";
import API from "./fetchCountries";
import cardForm from "../templates/cardForm.hbs";
import listCountries from "../templates/listCountries.hbs";
import { errorMessage } from "./pnotify.js";

refs.inputEl.addEventListener("input", debounce(onInputValue, 500));

// получаю значение из инпута
function onInputValue(e) {
  const countryName = e.target.value;
  if (!countryName) {
    return;
  }
  API(countryName)
    .then((data) => renderCountryResult(data))
    .catch((error) => console.log(error));
}

// функция, которая очищает от разметки
function clearCountryCard(elem) {
  elem.innerHTML = "";
}

//функция, которая создает разметку
//elem - ссылка на DOM элемент, т.е тэг html, в который вставляется разметка шаблона
// template - вызов шаблона hbs(сам шаблон)
function createMarkUp(elem, template) {
  elem.insertAdjacentHTML("beforeend", template);
}

// функция, которая отвечает за отрисовку рендер результата
function renderCountryResult(countries) {
  const cardMarkUp = cardForm(...countries);
  const listMarkUp = listCountries(countries);
  clearCountryCard(refs.cardCountriesEl);
  clearCountryCard(refs.cardListEl);
  if (countries.length === 1) {
    createMarkUp(refs.cardCountriesEl, cardMarkUp);
  } else if (countries.length > 1 && countries.length <= 10) {
    createMarkUp(refs.cardListEl, listMarkUp);
  } else {
    errorMessage.open();
  }
}
