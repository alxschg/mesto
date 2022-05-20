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
const CardTemplate = document.querySelector('#element-card').content;


//Функция открытия и закрытия edit-popup
function popupEditInputCompletion() {
    if (popupProfile.classList.contains('popup_is-opened'))
    {
        nameEdit.value = profileTitle.textContent;
        jobEdit.value = profileDescription.textContent;
    }
}


//Функция открытия и закрытия card-popup
function popupOpenAdd(popup) {
    popup.classList.add('popup_is-opened');
}
function popupCloseRemove(popup) {
    popup.classList.remove('popup_is-opened');
}


function editFormSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameEdit.value;
    profileDescription.textContent = jobEdit.value;
    popupCloseRemove(popupProfile);
}

function cardFormSubmitHandler (evt) {
    evt.preventDefault();
    let item = 
        {
            name: nameCard.value,
            link: linkCard.value
        }
    ;
    const popupSubmitCard = CreateCard(item);
    AddCard(popupSubmitCard);
    popupCloseRemove(popupCard);
    nameCard.reset();
    linkCard.reset();
}


//Функция создания card
function CreateCard(item){
    const CardElement = CardTemplate.querySelector('.element').cloneNode(true);

    CardElement.querySelector('.element__image').src = item.link;
    CardElement.querySelector('.element__title').textContent = item.name;

    CardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    CardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
        evt.target.closest('li').remove();
    });

    CardElement.querySelector('.element__image').addEventListener('click', function (evt) {
        popupOpenAdd(popupImage);
        popupImageLink.src = item.link;
        popupImageText.textContent = item.name;
    });

    return CardElement;
}

//Добавление card в разметку
function AddCard(CardElement){
    cardplace.prepend(CardElement);
}

//Добоавления массива в разметку
initialCards.forEach(function(item){
    const cardAppend = CreateCard(item);
    AddCard(cardAppend);
});

//Открытие попапа edit-profile
editProfileButton.addEventListener('click', function(){
    popupEditInputCompletion();
    popupOpenAdd(popupProfile);
});

//Открытие попапа card
cardAddButton.addEventListener('click', function(){popupOpenAdd(popupCard);});

//Кнопки закрытия
popupProfileCloseButton.addEventListener('click', function(){popupCloseRemove(popupProfile);});
popupCardCloseButton.addEventListener('click', function(){popupCloseRemove(popupCard);});
popupImageCloseButton.addEventListener('click', function(){popupCloseRemove(popupImage);});

//submit
profilePopupForm.addEventListener('submit', editFormSubmitHandler);
cardPopupForm.addEventListener('submit', cardFormSubmitHandler);