import gallery from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  largeImage: document.querySelector(".lightbox__image"),
  lightbox: document.querySelector(".lightbox"),
  lightbox__button: document.querySelector(
    'button[data-action="close-lightbox"]'
  ),
  lightbox__content: document.querySelector(".lightbox__content"),
};

const createGalleryItem = gallery.map((element) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const img = document.createElement("img");
  li.classList.add("gallery__item");
  a.classList.add("gallery__link");
  img.classList.add("gallery__image");
  a.setAttribute("href", element.original);
  img.setAttribute("src", element.preview);
  img.setAttribute("data-source", element.original);
  img.setAttribute("alt", element.description);
  a.append(img);
  li.append(a);
  return li;
});

refs.gallery.append(...createGalleryItem);

refs.gallery.addEventListener("click", onGalleryClikc);
refs.lightbox__button.addEventListener("click", closeModel);
refs.lightbox__content.addEventListener("click", clickOverlay);

function onGalleryClikc(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imageRef = event.target;
  const largImageURL = imageRef.dataset.source;
  setLargeImgSrc(largImageURL);

  openModel();
}
function setLargeImgSrc(url) {
  refs.largeImage.src = url;
}
function openModel() {
  window.addEventListener("keydown", pressEscape);
  refs.lightbox.classList.add("is-open");
}
function closeModel() {
  window.removeEventListener("keydown", pressEscape);
  refs.lightbox.classList.remove("is-open");
  refs.largeImage.src = "";
}
function clickOverlay() {
  if (event.target === event.currentTarget) {
    closeModel();
  }
}
function pressEscape() {
  if (event.code === "Escape") {
    closeModel();
  }
}
