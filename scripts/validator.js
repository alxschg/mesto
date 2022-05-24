const validationConfig = {
  formSelector : '.form',
  inputError : 'popup__input_type_error',
  inputErrorActive : 'popup__input-error_active',
  formInput : '.popup__input',
  formButton : '.popup__button-save',
  formFieldset : '.popup__fieldset'
};

const showInputError = (formElement, inputElement, errorMessage,  config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputError);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.inputErrorActive);
  };
  
  const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.inputError);
    errorElement.classList.remove(config.inputErrorActive);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage,  config);
    } else {
      hideInputError(formElement, inputElement, config);
    }
  };
  
  const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.formInput));
    const buttonElement = formElement.querySelector(config.formButton);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
       const fieldsetList = Array.from(formElement.querySelectorAll(config.formFieldset));
      fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet, config);
  }); 
      
    });
  };
  
  
  const hasInvalidInput = (inputList) =>{
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  }
  
  const toggleButtonState = (inputList, buttonElement) =>{
    if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', 'disabled');
  } else {
      buttonElement.removeAttribute('disabled');
  }
  }
  
  
  enableValidation(validationConfig);