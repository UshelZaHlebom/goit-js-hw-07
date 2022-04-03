import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const imageMarkup = createImageGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imageMarkup);

galleryContainer.addEventListener('click', stopDefAction)

function stopDefAction(event) {
    event.preventDefault();
}

function createImageGallery(image){
    return image.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`
        
    })
    .join('')
};

const imageNodeList = document.querySelectorAll('.gallery__image');

for (let i = 0; i < imageNodeList.length; i+=1) {
    imageNodeList[i].addEventListener('click', function() {
        basicLightbox.create(`<img width="1400" height="900" src="${this.dataset.source}">
        `).show()
        console.log(this.dataset.source)
        console.log('click')
    });
}