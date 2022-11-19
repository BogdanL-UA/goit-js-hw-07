import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach(function (item) {
  const galleryItem = `<a class="gallery__item" href=${item.original}>
        <img
          class="gallery__image"
          src=${item.preview}
          alt=${item.description}
        />
      </a>`;
  galleryEl.insertAdjacentHTML('afterbegin', galleryItem);
});

const gallery = new SimpleLightbox('.gallery a', {
  overlay: true,
  overlayOpacity: 0.9,
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

galleryEl.addEventListener('click', createModalWindow);
