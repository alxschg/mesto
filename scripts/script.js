//Объявление ссылок

//Кнопки открытия попапов
const editProfileButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');

//Попапы
const popupProfile = document.querySelector('#edit-profile');
const popupCard = document.querySelector('#create-card');
const popupImage = document.querySelector('#image-card');

//Кнопки закрытия попапов
const popupProfileCloseButton = popupProfile.querySelector('.popup__close');
const popupCardCloseButton = popupCard.querySelector('.popup__close');
const popupImageCloseButton = popupImage.querySelector('.popup__close');

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

const editForm = document.forms.editcard;


//Функция открытия и закрытия card-popup
function popupOpen(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', CloseEsc);
}
function popupClose(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', CloseEsc);
}


function editFormSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameEdit.value;
    profileDescription.textContent = jobEdit.value;
    popupClose(popupProfile);
}

function cardFormSubmitHandler (evt) {
    evt.preventDefault();
    const item = 
        {
            name: nameCard.value,
            link: linkCard.value
        }
    ;
    const popupSubmitCard = createCard(item);
    addCard(popupSubmitCard);
    popupClose(popupCard);
    editForm.reset();
}


//Функция создания card
function createCard(item){
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__image').src = item.link;
    cardElement.querySelector('.element__title').textContent = item.name;

    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    cardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
        evt.target.closest('li').remove();
    });

    cardElement.querySelector('.element__image').addEventListener('click', function (evt) {
        popupOpen(popupImage);
        popupImageLink.src = item.link;
        popupImageText.textContent = item.name;
    });

    return cardElement;
}

//Добавление card в разметку
function addCard(CardElement){
    cardplace.prepend(CardElement);
}

//Закрытие попапа esc
function CloseEsc (evt){
    const popupIsOpened = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape') {
      popupClose(popupIsOpened);
};
}

//Добоавления массива в разметку
initialCards.forEach(function(item){
    const cardAppend = createCard(item);
    addCard(cardAppend);
});

//Открытие попапа edit-profile
editProfileButton.addEventListener('click', function(){
    popupOpen(popupProfile);
    nameEdit.value = profileTitle.textContent;
    jobEdit.value = profileDescription.textContent;
});


//Закрытие попапов
popupProfile.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close_edit')) {
        popupClose(popupProfile);
    }
  });
  popupCard.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close_card')) {
        popupClose(popupCard);
    }
  });
  popupImage.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close_image')) {
        popupClose(popupImage);
    }
  })

  

//Открытие попапа card
cardAddButton.addEventListener('click', function(){popupOpen(popupCard);});

//submit
profilePopupForm.addEventListener('submit', editFormSubmitHandler);
cardPopupForm.addEventListener('submit', cardFormSubmitHandler);