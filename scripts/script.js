import {profileEditButton, cardAddButton, popupProfile, popupCard, popupImage, popupCardSubmitButton, profilePopupForm,
    cardPopupForm, nameEdit, jobEdit, profileTitle, profileDescription, nameCard,
    linkCard, cardplace, formEdit, initialCards, validationConfig} from "./const.js";

import { Card } from "./cards.js";
import { FormValidator } from "./validator.js";
import { openPopup, closePopup } from "./utils.js";

//submit 

function submitEditFormHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameEdit.value;
    profileDescription.textContent = jobEdit.value;
    closePopup(popupProfile);
}

function submitCardFormHandler (evt) {
    evt.preventDefault();
    const item = 
        {
            name: nameCard.value,
            link: linkCard.value
        }
    ;
    const card = new Card(item, "#element-card");
    const popupSubmitCard = card.createCard();
    addCard(popupSubmitCard);
    closePopup(popupCard);
    formEdit.reset();
    popupCardSubmitButton.setAttribute('disabled', 'disabled');
}

//Добавление card в разметку
function addCard(cardAppend){
    cardplace.prepend(cardAppend);
}
//Добоавления массива в разметку
initialCards.forEach((item) => {
    const card = new Card(item, "#element-card");
    const cardExample = card.createCard();
    addCard(cardExample); 
});

//Открытие попапа edit-profile
profileEditButton.addEventListener('click', function(){
    nameEdit.value = profileTitle.textContent;
    jobEdit.value = profileDescription.textContent;
    openPopup(popupProfile);
});
//Открытие попапа card
cardAddButton.addEventListener('click', function(){openPopup(popupCard);});

//Закрытие попапов
    popupProfile.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close_edit')) {
        closePopup(popupProfile);
    }
  });
    popupCard.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close_card')) {
        closePopup(popupCard);
    }
  });
    popupImage.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close_image')) {
        closePopup(popupImage);
    }
  });


//Валидация profile
const formProfileValidator = new FormValidator(validationConfig, profilePopupForm);
formProfileValidator.enableValidation();
profilePopupForm.addEventListener('submit', submitEditFormHandler);

//Валидация card
const formCardValidator = new FormValidator(validationConfig, cardPopupForm);
formCardValidator.enableValidation();
cardPopupForm.addEventListener('submit', submitCardFormHandler);