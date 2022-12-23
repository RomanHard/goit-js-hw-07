import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  imageContainer: document.querySelector(".gallery"),
  body: document.body,
};

function newgalleryItems(items) {
  return items
    .map(({ preview, description, original }) => {
      return `<div class="gallery__item">
      <a class="gallery__item" href="${original}">
      <img loading="lazy" width="354" height="240"
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

const cardgalleryMarkup = newgalleryItems(galleryItems);
refs.imageContainer.insertAdjacentHTML("beforeend", cardgalleryMarkup);
