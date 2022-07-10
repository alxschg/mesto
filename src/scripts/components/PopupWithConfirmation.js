import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup{
    constructor(popupSelector, handleConfirmationCallback) {
        super(popupSelector);
        this._handleConfirmationCallback = handleConfirmationCallback;
        this._confirmButton = this._popup.querySelector('.popup__button-save');
    }
  
    renderLoading(isLoading) {
      if(isLoading) {
        this._confirmButton.textContent = 'Удаление...';
      } else {
        this._confirmButton.textContent = 'Да';
      }
    }
  
    open(card, cardId) {
        this._card = card;
        this._cardId = cardId;
        super.open();
      }

    setEventListeners() {
      super.setEventListeners();
      this._confirmButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        this._handleConfirmationCallback(this._card, this._cardId);
      });
    }

    }