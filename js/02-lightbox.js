import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGallary = () => {
    return galleryItems.map(item => {
        return `
        <a class="gallery__item" href=${item.original}>
           <img class="gallery__image" src=${item.preview} alt=${item.description}/>
        </a>
        `
    }).join('');
}

const onPreveiwClick = (evt) => {
    evt.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a', {});
    lightbox.defaultOptions.captionsData = 'alt';
    lightbox.defaultOptions.captionDelay = 250;
}

const divGallary = document.querySelector('div.gallery');
divGallary.insertAdjacentHTML("beforeend", makeGallary());
divGallary.addEventListener('click', onPreveiwClick);