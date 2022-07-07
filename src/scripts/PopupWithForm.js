import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, handleSubmit){
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.form');
        this._formEdit = document.forms.editcard;
    }

    _getInputValues(){
        const inputs = [...this._form.querySelectorAll('.popup__input')];
        const values = {};
        inputs.forEach((input) => {
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
        this._formEdit.reset();
    }
}