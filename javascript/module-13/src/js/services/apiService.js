export default {
  page: 1,
  query: '',
  fetchImages() {
    const key = '19059245-b594f8376705d9c7e4f842c86';
    const per_page = 12;
    const fetchUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${per_page}&key=${key}`;

    return fetch(fetchUrl)
      .then(res => res.json())
      .then(pars => {
        this.incrementPage();
        return pars.hits;
      });
  },

  set searchQuery(str) {
    this.query = str;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};
