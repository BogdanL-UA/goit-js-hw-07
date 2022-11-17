import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const createGallery = galleryItems.map((item) => {
  const galleryItem = `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </div>`;
  galleryEl.insertAdjacentHTML('afterbegin', galleryItem);
});

const getUrl = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const bigImgUrl = event.target.dataset;
  console.log(bigImgUrl);
};

galleryEl.addEventListener('click', getUrl);
