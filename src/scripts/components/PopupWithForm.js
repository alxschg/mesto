import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleSubmit){
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.form');
        this._submitButton = this._popup.querySelector('.popup__button-save');
        this._submitText = this._submitButton.textContent;
        this._inputs = [...this._form.querySelectorAll('.popup__input')];
    }

    _getInputValues(){
        const values = {};
        this._inputs.forEach((input) => {
            values[input.name] = input.value;
        })
        return values;
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', () => {this._handleSubmit(this._getInputValues())});
    }

    close(){
        super.close();
        this._form.reset();
    }

    loading(isLoading) {
        if (isLoading) {
          this._submitButton.textContent = 'Сохранение...';
        } else {
          this._submitButton.textContent = this._submitText;
        }
}
}