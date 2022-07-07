import '../pages/index.css';

import {profileEditButton, cardAddButton, profilePopupForm, selectorConfig,
    cardPopupForm, nameEdit, jobEdit, cardplace, initialCards, validationConfig} from "../scripts/utils/const.js";

import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";

//submit 
const submitEditFormHandler = (data) => {
    const {name, aboutName} = data;
    userInfo.setUserInfo(name, aboutName);
    popupEditProfile.close();
}

const submitCardFormHandler = (data) => {
    const item = {
        name: data.imageName,
        link: data.imageLink
    }
    const elem = createInstanceCard(item);
    sectionCard.addItem(elem);
    popupAddCard.close();
    formCardValidator.toggleButtonState();
}

const createInstanceCard = (item) =>{
    const card = new Card(item, selectorConfig.elementCard,  () => {
        popupImage.open(item.name, item.link);
    });
    const cardSubmit = card.createCard();
    return cardSubmit;
}

//Открытие попапа edit-profile
profileEditButton.addEventListener('click', function(){
    const {name, aboutName} = userInfo.getUserInfo();
    nameEdit.value = name;
    jobEdit.value = aboutName;
    popupEditProfile.open();
});
//Открытие попапа card
cardAddButton.addEventListener('click', function(){popupAddCard.open();});

//Валидация profile
const formProfileValidator = new FormValidator(validationConfig, profilePopupForm);
formProfileValidator.enableValidation();

//Валидация card
const formCardValidator = new FormValidator(validationConfig, cardPopupForm);
formCardValidator.enableValidation();

const sectionCard = new Section({items: initialCards, renderer: createInstanceCard}, cardplace);
sectionCard.renderItems();

const popupImage = new PopupWithImage(selectorConfig.imageCard);
popupImage.setEventListeners();

const popupAddCard = new PopupWithForm(selectorConfig.cardCreate, submitCardFormHandler);
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm(selectorConfig.profileEdit, submitEditFormHandler);
popupEditProfile.setEventListeners();

const userInfo = new UserInfo({ nameSelector: selectorConfig.profileTitle, aboutNameSelector: selectorConfig.profileDescription});