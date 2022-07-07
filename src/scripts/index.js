import '../pages/index.css';

import {profileEditButton, cardAddButton, profilePopupForm,
    cardPopupForm, nameEdit, jobEdit, cardplace, initialCards, validationConfig} from "./utils/const.js";

import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";

//submit 
const submitEditFormHandler = (data) => {
    const {name, aboutName} = data;
    userInfo.setUserInfo(name, aboutName);
    editProfilePopup.close();
}

const submitCardFormHandler = (data) => {
    const item = {
        name: data.imageName,
        link: data.imageLink
    }
    renderCard(item);
    addCardPopup.close();
    formCardValidator.toggleButtonState();
}

const renderCard = (item) =>{
    const card = new Card(item, "#element-card",  () => {
        imgPopup.open(item.name, item.link);
    });
    const popupSubmitCard = card.createCard();
    sectionCard.addItem(popupSubmitCard);
    return popupSubmitCard;
}

//Открытие попапа edit-profile
profileEditButton.addEventListener('click', function(){
    const {name, aboutName} = userInfo.getUserInfo();
    nameEdit.value = name;
    jobEdit.value = aboutName;
    editProfilePopup.open();
});
//Открытие попапа card
cardAddButton.addEventListener('click', function(){addCardPopup.open();});

//Валидация profile
const formProfileValidator = new FormValidator(validationConfig, profilePopupForm);
formProfileValidator.enableValidation();

//Валидация card
const formCardValidator = new FormValidator(validationConfig, cardPopupForm);
formCardValidator.enableValidation();

const sectionCard = new Section({items: initialCards, renderer: renderCard}, cardplace);
sectionCard.renderItems();

const imgPopup = new PopupWithImage('#image-card');
imgPopup.setEventListeners();

const addCardPopup = new PopupWithForm('#create-card', submitCardFormHandler);
addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm('#edit-profile', submitEditFormHandler);
editProfilePopup.setEventListeners();

const userInfo = new UserInfo({ nameSelector: '.profile__title', aboutNameSelector: '.profile__description'});