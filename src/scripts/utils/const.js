    //валидатор
    const validationConfig = {
        formSelector : '.form',
        inputError : 'popup__input_type_error',
        inputErrorActive : 'popup__input-error_active',
        formInput : '.popup__input',
        formButton : '.popup__button-save',
        formFieldset : '.popup__fieldset'
    };

    const selectorConfig = {
      profileTitle: '.profile__title',
      profileDescription: '.profile__description',
      elementCard: '#element-card',
      imageCard: '#image-card',
      cardCreate: '#create-card',
      profileEdit: '#edit-profile',
      avatarUpdate: '#avatar-popup',
      avatar: '.profile__avatar',
      cardDelete: '#delete-popup'
    }

    //Кнопки открытия попапов
    const profileEditButton = document.querySelector('.profile__edit-button');
    const cardAddButton = document.querySelector('.profile__add-button');
    const avatarUpdateButton = document.querySelector('.profile__avatar-button');
    const cardDeleteButton = document.querySelector('.element__delete');
    
    
    //Попапы
    const popupProfile = document.querySelector('#edit-profile');
    const popupCard = document.querySelector('#create-card');
    const popupAvatar = document.querySelector('#avatar-popup');

    //Формы попапов
    const profilePopupForm = popupProfile.querySelector('.popup__form');
    const cardPopupForm = popupCard.querySelector('.popup__form');
    const avatarPopupForm = popupAvatar.querySelector('.popup__form');

    //Инпуты edit-popup
    const nameEdit = popupProfile.querySelector('.popup__input_type_name');
    const jobEdit = popupProfile.querySelector('.popup__input_type_job');

    //Место, куда будут вставляться card
    const cardplace = document.querySelector('.elements__list');

    const avatar = document.querySelector('.profile__avatar');

    export {
      profileEditButton, cardAddButton, profilePopupForm,
      cardPopupForm, nameEdit, jobEdit, cardplace, validationConfig,
      selectorConfig, avatarUpdateButton, avatar, avatarPopupForm, cardDeleteButton
    };