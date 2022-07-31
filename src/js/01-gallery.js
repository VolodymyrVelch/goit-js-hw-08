import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');

// добавляємо днамічно  елменти масиву в розмітку

const list = galleryItems.map(
  img =>
    `
    <a class="gallery__item" href=${img.original}>
      <img
        class="gallery__image"
        src=${img.preview}
        title = ${img.description}
        alt=${img.description}
      />
    </a>
  `
);
galleryList.insertAdjacentHTML('afterbegin', list.join(''));

// ініціалізуємо SimpleLightbox , та додаємо опції відображення

let lightbox = new SimpleLightbox('.gallery a', {
  fadeSpeed: '250',
  scrollZoom: 'true',
  animationSpeed: '250',
});
