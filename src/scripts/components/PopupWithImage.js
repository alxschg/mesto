import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    open(text, link){
        const image = this._popup.querySelector('.popup__image');
        const title = this._popup.querySelector('.popup__image-text');

        image.src = link;
        title.textContent = text;

        super.open();
    }
}