//Объявление ссылок

//Кнопки открытия попапов
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

//Попапы
const popupProfile = document.querySelector('#edit-profile');
const popupCard = document.querySelector('#create-card');
const popupImage = document.querySelector('#image-card');

//Кнопки закрытия попапов
const popupProfileCloseButton = popupProfile.querySelector('.popup__close');
const popupCardCloseButton = popupCard.querySelector('.popup__close');
const popupImageCloseButton = popupImage.querySelector('.popup__close');
const popupSubmitButton = popupCard.querySelector('.popup__button-save');

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

//template
const cardTemplate = document.querySelector('#element-card').content;

const formEdit = document.forms.editcard;


//Функция открытия и закрытия card-popup
const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', closeEsc);
    popupSubmitButton.setAttribute('disabled', 'disabled');
}
function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', closeEsc);
}


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
    const popupSubmitCard = createCard(item);
    addCard(popupSubmitCard);
    closePopup(popupCard);
    formEdit.reset();
}


//Функция создания card
function createCard(item){
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementImage = cardElement.querySelector('.element__image');

    cardElementImage.src = item.link;
    cardElementImage.alt = item.name;
    cardElement.querySelector('.element__title').textContent = item.name;


    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    cardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
        evt.target.closest('li').remove();
    });

    cardElementImage.addEventListener('click', function (evt) {
        openPopup(popupImage);
        popupImageLink.src = item.link;
        popupImageLink.alt = item.name;
        popupImageText.textContent = item.name;
    });

    return cardElement;
}

//Добавление card в разметку
function addCard(CardElement){
    cardplace.prepend(CardElement);
}

//Закрытие попапа esc
function closeEsc (evt){
    if (evt.key === 'Escape') {
        const popupIsOpened = document.querySelector('.popup_is-opened');
        closePopup(popupIsOpened);
};
}

//Добоавления массива в разметку
initialCards.forEach(function(item){
    const cardAppend = createCard(item);
    addCard(cardAppend);
});

//Открытие попапа edit-profile
profileEditButton.addEventListener('click', function(){
    nameEdit.value = profileTitle.textContent;
    jobEdit.value = profileDescription.textContent;
    openPopup(popupProfile);
});


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
  })

  

//Открытие попапа card
cardAddButton.addEventListener('click', function(){openPopup(popupCard);});

//submit
profilePopupForm.addEventListener('submit', submitEditFormHandler);
cardPopupForm.addEventListener('submit', submitCardFormHandler);