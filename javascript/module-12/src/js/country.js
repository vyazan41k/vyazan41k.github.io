import fetchCountry from './services/fetchCountries';
import countryTemplates from './templates/countryTemplates.hbs';
import countryListItem from './templates/countryListItem.hbs';
import notification from './notification';

const debounce = require('lodash.debounce');
const refs = {
  searchForm: document.querySelector('.input'),
  coutryInfo: document.querySelector('.country'),
  countryList: document.querySelector('.country_list'),
};

refs.searchForm.addEventListener('input', searchCoutry);

const fetch = debounce(function (search) {
  fetchCountry.fetchCountries(search).then(data => {
    const total = data.length;

    if (total > 1 && total <= 10) {
      markupCountryList(data);
    } else if (total > 10) {
      notification.click();
    } else {
      markupCountry(data);
    }
  });
}, 500);

function searchCoutry(event) {
  clearCountruInfo();
  clearCountruList();

  const searchQuery = event.currentTarget.value;

  if (searchQuery === '') {
    return;
  } else {
    fetch(searchQuery);
  }
}

function markupCountry(countres) {
  const country = countres.map(item => countryTemplates(item)).join('');
  refs.coutryInfo.insertAdjacentHTML('beforeend', country);
}

function markupCountryList(countryListArray) {
  const result = countryListArray.map(item => countryListItem(item)).join('');
  refs.countryList.insertAdjacentHTML('beforeend', result);
}

function clearCountruInfo() {
  refs.coutryInfo.innerHTML = '';
}

function clearCountruList() {
  refs.countryList.innerHTML = '';
}
