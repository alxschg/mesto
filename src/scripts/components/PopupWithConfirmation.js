import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._confirmButton = this._popup.querySelector('.popup__button-save');
    }

      submitCallback(removing) {
        this._handleConfirmationCallback = removing;
      }

    setEventListeners() {
      super.setEventListeners();
      this._confirmButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        this._handleConfirmationCallback();
      });
    }

    }