import '../pages/index.css';


import {profileEditButton, cardAddButton, profilePopupForm, selectorConfig,
    cardPopupForm, nameEdit, jobEdit, cardplace, validationConfig,
    avatarPopupForm, avatarUpdateButton, avatar} from "../scripts/utils/const.js";

import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from '../scripts/components/Api.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';


const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-44',
    headers: {
      authorization: '91c374b9-c64e-4621-8c13-f2fddf25afb9',
      'Content-Type': 'application/json'
    }
  }); 


let userId;

Promise.all([api.getUserInfo(), api.getCards()])
.then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    sectionCard.renderItems(cards);
})
.catch((err) => {
    console.log(err);
});


//___________Открытие_попапов______________

//Открытие попапа edit-profile
profileEditButton.addEventListener('click', function(){
    const {name, aboutName} = userInfo.getUserInfo();
    nameEdit.value = name;
    jobEdit.value = aboutName;
    popupEditProfile.open();
});
//Открытие попапа card
cardAddButton.addEventListener('click', function(){popupAddCard.open();});
//Открытие попапа редактирования аватарки
avatarUpdateButton.addEventListener('click', function(){popupAvatarUpdate.open();});


//Функция создания карточек
const createInstanceCard = (item) =>{
    const card = new Card(item, selectorConfig.elementCard, userId, api,
        () => {popupImage.open(item.name, item.link);},
        () => {popupDeleteCard.open(cardSubmit, item._id);});
    const cardSubmit = card.createCard();
    return cardSubmit;
}


//submit
//Для профиля
const submitEditFormHandler = (data) => {
    popupEditProfile.loading(true);
    api.editProfil(data)
    .then((data)=>{userInfo.setUserInfo(data);
    popupEditProfile.close();
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(()=>{
        popupEditProfile.loading(false);
    })
}
//Для карточек
const submitCardFormHandler = (data) => {
    popupAddCard.loading(true);
    api.addNewCard(data)
    .then((item) => {
        const elem = createInstanceCard(item);
        sectionCard.addItem(elem);
        popupAddCard.close();
        formCardValidator.toggleButtonState();
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(()=>{
        popupAddCard.loading(false);
    })
}
//Для аватарки
const submitAvatarFormHandler = (data) => {
    popupAvatarUpdate.loading(true);
    api.editAvatar(data)
    .then((item)=>{
        userInfo.setUserInfo(item);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(()=>{
        popupAvatarUpdate.loading(false);
    })
    popupAvatarUpdate.close();
    formCardValidator.toggleButtonState();
}


//Добавление card в разметку
const sectionCard = new Section({renderer: createInstanceCard}, cardplace);
//Добавление информации о пользователе
const userInfo = new UserInfo( selectorConfig.profileTitle, selectorConfig.profileDescription, selectorConfig.avatar);
//Создание попапа редактирования профиля
const popupEditProfile = new PopupWithForm(selectorConfig.profileEdit, submitEditFormHandler);
popupEditProfile.setEventListeners();
//Создание попапа для добавления новой карточки
const popupAddCard = new PopupWithForm(selectorConfig.cardCreate, submitCardFormHandler);
popupAddCard.setEventListeners();
//Создание попапа для редактирования аватарки
const popupAvatarUpdate = new PopupWithForm(selectorConfig.avatarUpdate, submitAvatarFormHandler);
popupAvatarUpdate.setEventListeners();
//Создаем попап для удаления карточки
const popupDeleteCard = new PopupWithConfirmation(selectorConfig.cardDelete, submitDeleteCardFormHandler);
popupDeleteCard.setEventListeners();
//Создания попапа для открытия изображений с карточек
const popupImage = new PopupWithImage(selectorConfig.imageCard);
popupImage.setEventListeners();






//submit 
function submitDeleteCardFormHandler(card, idCard){
    api.deleteCard(idCard)
    .then(() => {
        card.remove();
        card = null;
      })
    .catch((err) => {
        console.log(err);
      });
    popupDeleteCard.close();
    
}



//____________Валидация___________
const formProfileValidator = new FormValidator(validationConfig, profilePopupForm);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(validationConfig, cardPopupForm);
formCardValidator.enableValidation();

const formAvatarValidator = new FormValidator(validationConfig, avatarPopupForm);
formAvatarValidator.enableValidation();


