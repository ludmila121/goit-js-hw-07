
    import { galleryItems } from "./gallery-items.js";

const galleryListRef = document.querySelector("div.gallery");

const makeGalleryListMarkup = ({ preview, original, description }) => {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a>
    </div>
  `;
};

const makeGalleryListElement = galleryItems.map(makeGalleryListMarkup).join("");
galleryListRef.insertAdjacentHTML("beforeend", makeGalleryListElement);

galleryListRef.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscapeClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscapeClose);
      },
    }
  );

  instance.show();

  function onEscapeClose(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}