export default class FormValidator{
  constructor(config, form){
    this._form = form;
    this._formSelector = config.formSelector;
    this._inputError = config.inputError;
    this._inputErrorActive = config.inputErrorActive;
    this._formInput = config.formInput;
    this._formButton = config.formButton;
    this._formFieldset = config.formFieldset;
    this._inputList = Array.from(this._form.querySelectorAll(this._formInput));
    this._buttonElement = this._form.querySelector(this._formButton);
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputError);
    errorElement.classList.remove(this._inputErrorActive);
    errorElement.textContent = '';
  };
  
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorActive);
  };

  _hasInvalidInput = () =>{
    return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute('disabled', 'disabled');
  } else {
      this._buttonElement.removeAttribute('disabled');
  }
  }

  _setEventListeners = () => {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', function (evt)
    {
      evt.preventDefault();
    });
    this._setEventListeners();
};
  
}