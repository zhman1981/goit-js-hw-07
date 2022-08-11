import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';
// Change code below this line

const makeGallary = () => {
    return galleryItems.map(item => {
        return `
        <div class="gallery__item">
            <!--<a class="gallery__link" href=${item.original}>-->
                <img
                class="gallery__image"
                src=${item.preview}
                data-source=${item.original}
                alt=${item.description}
                />
            <!--</a>-->
        </div>
        `
    }).join('');
}

const onPreveiwClick = (evt) => {
    if (evt.target.nodeName !== 'IMG') { return }
    const instance = basicLightbox.create(`
        <div class="modal">
            <p>
                Your first lightbox with just a few lines of code.
                Yes, it's really that simple.
            </p>
        </div>
    `)

    instance.show()
    console.log(evt.target.src);
}

const divGallary = document.querySelector('div.gallery');
divGallary.insertAdjacentHTML("beforeend", makeGallary());
divGallary.addEventListener('click', onPreveiwClick);


// console.log(makeGallary());
