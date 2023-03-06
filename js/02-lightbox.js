import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListRef = document.querySelector(".gallery");

const makeGalleryListMarkup = ({ original, preview, description}) => {
  return `
     <ul class="gallery"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></ul>
  `;
};

const makeGalleryListElement = galleryItems.map(makeGalleryListMarkup).join("");
galleryListRef.insertAdjacentHTML("beforeend", makeGalleryListElement);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: `alt`, captionPosition: 'bottom', captionDelay: 250 });


