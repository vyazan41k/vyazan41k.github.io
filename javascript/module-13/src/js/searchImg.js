import imgService from './services/apiService';
import cardsTemp from './temp/photo-card.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMore.addEventListener('click', loadMore);

function searchFormSubmitHandler(e) {
  e.preventDefault();
  const inputString = e.currentTarget.elements.query.value;

  clearList();
  imgService.resetPage();
  imgService.searchQuery = inputString;
  imgService.fetchImages().then(insertHtml);
  scroll();
}

function loadMore() {
  imgService.fetchImages().then(insertHtml);
}

function insertHtml(items) {
  const markup = cardsTemp(items);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

function clearList() {
  refs.gallery.innerHTML = '';
}

function scroll() {
  let height = window.innerHeight + window.pageYOffset;

  scrollTo({
    top: height,
    behavior: 'smooth',
  });
}
