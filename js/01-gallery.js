

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

import { galleryItems } from './gallery-items.js';
 
const galeryImg = document.querySelector(`.gallery`);
galeryImg.insertAdjacentHTML(`beforeend`, createMarkeUp);
function createMarkeUp(galleryItems) {
    const markUp = galleryItems.map(({ preview, original,description}) => {
        return `<div><a><img src = "${preview}" title =" " alt =" "></a></div>`;
    }).join(``);
    return markUp;
}
console.log(galleryItems);



const instance = basicLightbox.create(`
    <div class="modal">
        <p>A custom modal that has been styled independently. It's not part of basicLightbox, but perfectly shows its flexibility.</p>
        <input placeholder="Type something">
        <a>Close</a>
    </div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('a').onclick = instance.close
    }
})

instance.show()