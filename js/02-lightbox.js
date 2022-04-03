import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const imageMarkup = createImageGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imageMarkup);

function createImageGallery(image){
    return image.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    })
    .join('')
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData : 'alt', captionDelay : 250, closeText : 'X'});

// lightbox.on('show.simplelightbox', function () {
// 	// do something…
// });

console.log(galleryItems);
