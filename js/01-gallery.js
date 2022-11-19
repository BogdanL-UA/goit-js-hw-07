import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryItems.map((item) => {
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
  const bigImgUrl = event.target.dataset.source;

  createModalWindow(bigImgUrl);
};

const createModalWindow = (bigImgUrl) => {
  const closeModalWindow = (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `<img src=${bigImgUrl} width="800" height="600"/>`,
    {
      onShow: () => {
        window.addEventListener('keydown', closeModalWindow);
      },
      onClose: () => {
        window.removeEventListener('keydown', closeModalWindow);
      },
    }
  );
  instance.show();
};

galleryEl.addEventListener('click', getUrl);
