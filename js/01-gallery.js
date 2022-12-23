import { galleryItems } from "./gallery-items.js";
// Change code below this line

const palletContainet = document.querySelector(`div.gallery`);
const cardMarup = createItems(galleryItems);
palletContainet.insertAdjacentHTML(`beforeend`, cardMarup);

palletContainet.addEventListener(`click`, onpalletContainetClick);

function createItems(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${preview}">
        <img
          class="gallery__image"
          src="${original}"
           data-source="${preview}"
          alt="${description}"
        />
      </a>
    </div>
    `;
    })
    .join(``);
}

function onpalletContainetClick(evt) {
  const imgContainer = evt.target.classList.contains(`gallery__item`);
  if (!imgContainer) {
    return;
  }
  console.log(evt.target);
}
