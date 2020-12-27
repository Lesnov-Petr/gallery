import images from './gallery-items.js';

const gallaryImg = document.querySelector('.js-gallery');
const arrayImg = [];
const isModalGallary = document.querySelector('.js-lightbox');
const btnCloseModal = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const isLargeImg = document.querySelector('.lightbox__image');
let indexImg;

gallaryImg.addEventListener('click', getBigImg);
gallaryImg.addEventListener('keydown', viewingGallery);
btnCloseModal.addEventListener('click', hiddenModal);
isModalGallary.addEventListener('click', closeGalleryClickModal);

images.forEach((element, index) => {
  const imgLi = document.createElement('li');
  imgLi.classList = 'gallery__item';
  imgLi.insertAdjacentHTML(
    'beforeend',
    `<a class='gallery__link' href='${element.original}'><img src='${element.preview}' alt='${element.description}' data-source='${element.original}' class='gallery__image' data-index='${index}'></img></a>`,
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

  indexImg = Number(activImg.dataset.index);

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

function closeGalleryClickModal(event) {
  if (event.target.nodeName !== 'IMG') {
    hiddenModal();
  }
}

function viewingGallery(event) {
  if (event.code === 'ArrowRight') {
    viewingGalleryRight(event);
  }

  if (event.code === 'ArrowLeft') {
    viewingGalleryLeft(event);
  }

  if (event.code === 'Escape') {
    hiddenModal();
  }
}

function viewingGalleryRight(event) {
  indexImg = indexImg === images.length - 1 ? 0 : (indexImg += 1);
  images.map(element => (isLargeImg.src = element[indexImg].original));
}

function viewingGalleryLeft(event) {
  indexImg = indexImg === 0 ? images.length - 1 : (indexImg -= 1);
  images.map(element => (isLargeImg.src = element[indexImg].original));
}
