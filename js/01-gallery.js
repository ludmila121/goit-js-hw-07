

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// import {galleryItems} from './gallery-items.js';
 
// const galleryImg = document.querySelector(`div.gallery`);

// const imgMarkup = ({ preview, original, description }) => {
//     return `<div class = "gallery">
//         <a class="gallery__link">
//         <img src = "${preview}" data-source ="${original} " alt ="${description} ">
//         </a>
//         </div>`
// };
// const makeGalleryListElement = imgMarkup.map(galleryImg).join(""); 
//   const galleryListRef.insertAdjacentHTML("beforeend", imgMarkup);
// galleryListRef.addEventListener(`click`, (onGalleryImgClick));
// function onGalleryImgClick(evt) {
//     evt.preventDefault();
//     if (evt.target.nodeName !== `IMG`) {
//         return;
//     }
    


//     const instance = basicLightbox.create(
//         `<img src="${evt.target.dataset - source}" width="800" height="600"> `,
//         {
//             onShow: () =>{ 
//                 document.addEventListener(`keydown`, onEscapeClose)
//         },
//         onclose: () => {
//             document.removeEventListener("keydown", onEscapeClose);
//         }
// }
// )
// instance.show();
// function onEscapeClose(evt) {
//     if (evt.code === "Escape") {
//         instance.close();
//     }
// }

///

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