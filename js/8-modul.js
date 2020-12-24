import images from './gallery-items.js';

const gallaryImg = document.querySelector('.js-gallery');
const arrayImg = [];
const isModalGallary = document.querySelector('.js-lightbox');
const btnCloseModal = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const isLargeImg = document.querySelector('.lightbox__image');

gallaryImg.addEventListener('click', getBigImg);
gallaryImg.addEventListener('keydown', viewingGallery);
btnCloseModal.addEventListener('click', hiddenModal);

images.forEach((element, index) => {
  const imgLi = document.createElement('li');
  imgLi.classList = 'gallery__item';
  imgLi.insertAdjacentHTML(
    'beforeend',
    `<a class='gallery__link' href='${element.original}' data-index='${index}'><img src='${element.preview}' alt='${element.description}' data-source='${element.original}' class='gallery__image' ></img></a>`,
  );
  arrayImg.push(imgLi);
});
gallaryImg.append(...arrayImg);

const linkGallery = document.querySelector('.gallery__link');

function getBigImg(event) {
  event.preventDefault();
  const activImg = event.target;

  if (activImg.nodeName !== 'IMG') {
    return;
  }

  getModal(activImg);

  isLargeImg.src = activImg.dataset.source;
}

function getModal(currentImg) {
  isModalGallary.classList.add('is-open');
}

function hiddenModal() {
  isModalGallary.classList.remove('is-open');
  isLargeImg.src = '';
}

function viewingGallery(event) {
  const activImg = event.target;
  const currentIndex = activImg.dataset.index;
  if (event.code === 'ArrowRight') {
    let nextIndex = Number(currentIndex) + 1;
    const nextImg = event.currentTarget.querySelector(
      `a[data-index='${nextIndex}']`,
    );

    isLargeImg.src = nextImg.href;
  }
  if (event.code === 'ArrowLeft') {
    let nextIndex = Number(currentIndex) - 1;
    const nextImg = event.currentTarget.querySelector(
      `a[data-index='${nextIndex}']`,
    );
    isLargeImg.src = nextImg.href;
  }
}
