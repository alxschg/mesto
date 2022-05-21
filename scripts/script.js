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


//Задаем значение инпутов в edit-popup
nameEdit.value = profileTitle.textContent;
jobEdit.value = profileDescription.textContent;


//Функция открытия и закрытия card-popup
function popupOpen(popup) {
    popup.classList.add('popup_is-opened');
}
function popupClose(popup) {
    popup.classList.remove('popup_is-opened');
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

//Добоавления массива в разметку
initialCards.forEach(function(item){
    const cardAppend = createCard(item);
    addCard(cardAppend);
});

//Открытие попапа edit-profile
editProfileButton.addEventListener('click', function(){
    popupOpen(popupProfile);
});

//Открытие попапа card
cardAddButton.addEventListener('click', function(){popupOpen(popupCard);});

//Кнопки закрытия
popupProfileCloseButton.addEventListener('click', function(){popupClose(popupProfile);});
popupCardCloseButton.addEventListener('click', function(){popupClose(popupCard);});
popupImageCloseButton.addEventListener('click', function(){popupClose(popupImage);});

//submit
profilePopupForm.addEventListener('submit', editFormSubmitHandler);
cardPopupForm.addEventListener('submit', cardFormSubmitHandler);