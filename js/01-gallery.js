import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGallary = () => {
    return galleryItems.map(item => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href=${item.original}>
            <img
            class="gallery__image"
            src=${item.preview}
            data-source=${item.original}
            alt=${item.description}
            />
          </a>
        </div>
        `
    }).join('');
}

const onPreveiwClick = (evt) => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') { return }
    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}">
    `)
    instance.show();
    if (instance.visible) {
        addEventListener('keydown', evt => {
            if (evt.code === 'Escape') {
                instance.close()
            }
        })
    }
}

const divGallary = document.querySelector('div.gallery');
divGallary.insertAdjacentHTML("beforeend", makeGallary());
divGallary.addEventListener('click', onPreveiwClick);