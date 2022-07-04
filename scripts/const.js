   //массив для карточек
   
   const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ]; 


    //валидатор
    const validationConfig = {
        formSelector : '.form',
        inputError : 'popup__input_type_error',
        inputErrorActive : 'popup__input-error_active',
        formInput : '.popup__input',
        formButton : '.popup__button-save',
        formFieldset : '.popup__fieldset'
    };

    //Кнопки открытия попапов
    const profileEditButton = document.querySelector('.profile__edit-button');
    const cardAddButton = document.querySelector('.profile__add-button');

    //Попапы
    const popupProfile = document.querySelector('#edit-profile');
    const popupCard = document.querySelector('#create-card');
    const popupImage = document.querySelector('#image-card');

    //Кнопки закрытия попапов
    const popupCardSubmitButton = popupCard.querySelector('.popup__button-save');

    //Формы попапов
    const profilePopupForm = popupProfile.querySelector('.popup__form');
    const cardPopupForm = popupCard.querySelector('.popup__form');

    //Инпуты edit-popup
    const nameEdit = popupProfile.querySelector('.popup__input_type_name');
    const jobEdit = popupProfile.querySelector('.popup__input_type_job');
    //Элементы profile
    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');

    //Инпуты card-popup
    const nameCard = popupCard.querySelector('.popup__input_type_name');
    const linkCard = popupCard.querySelector('.popup__input_type_job');
    //Элементы card
    const popupImageLink = popupImage.querySelector('.popup__image');
    const popupImageText = popupImage.querySelector('.popup__image-text');

    //Место, куда будут вставляться card
    const cardplace = document.querySelector('.elements__list');

    const formEdit = document.forms.editcard;

    export {
        profileEditButton, cardAddButton, popupProfile, popupCard, popupImage, popupCardSubmitButton, profilePopupForm,
        cardPopupForm, nameEdit, jobEdit, profileTitle, profileDescription, nameCard,
        linkCard, popupImageLink, popupImageText, cardplace, formEdit, initialCards,
        validationConfig
    };