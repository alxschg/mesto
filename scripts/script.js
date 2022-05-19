const popupOpenButton = document.querySelector('.profile__edit-button');
const AddCardButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('#EditProfile');
const popupCard = document.querySelector('#CreateCard');
const popupImage = document.querySelector('#imageCard');

const popupCloseButton = popupProfile.querySelector('.popup__close');
const popupEditButton = popupProfile.querySelector('.popup__button-save')
const popupCloseButton1 = popupCard.querySelector('.popup__close');
const popupEditButton1 = popupCard.querySelector('.popup__button-save')
const popupImageClose = popupImage.querySelector('.popup__close');

const formElement = popupProfile.querySelector('.popup__form');
const formElement1 = popupCard.querySelector('.popup__form');

const formCard = popupCard.querySelector('.popup__form');

const nameInput = popupProfile.querySelector('.popup__input_type_name');
const nameCard = popupCard.querySelector('.popup__input_type_name');

const jobInput = popupProfile.querySelector('.popup__input_type_job');
const linkCard = popupCard.querySelector('.popup__input_type_job');

const popupImageLink = popupImage.querySelector('.popup__image');
const popupImageText = popupImage.querySelector('.popup__image-text');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const Cardplace = document.querySelector('.elements__list');


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

function popupOpenToggle() {
    popupProfile.classList.toggle('popup_is-opened');
    if (popupProfile.classList.contains('popup_is-opened'))
    {
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileDescription.textContent;
    }
}

function popupOpenToggle1() {
    popupCard.classList.toggle('popup_is-opened');
}

function popupImageOpenToggle() {
    popupImage.classList.toggle('popup_is-opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    let name = nameInput.value;
    let job = jobInput.value;
    profileTitle.textContent = name;
    profileDescription.textContent = job;
    popupOpenToggle();
}

function formSubmitHandler1 (evt) {
    evt.preventDefault();
    let item = [
        {
            name: nameCard.value,
            link: linkCard.value
        }
    ];
    const popupSubmitCard = CreateCard(item[0]);
    AddCard(popupSubmitCard);
    popupOpenToggle1();
    nameCard.value = '';
    linkCard.value = '';
}

function CreateCard(item){
    const CardTemplate = document.querySelector('#element-card').content;
    const CardElement = CardTemplate.querySelector('.element').cloneNode(true);

    CardElement.querySelector('.element__image').src = item.link;
    CardElement.querySelector('.element__title').textContent = item.name;

    CardElement.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    CardElement.querySelector('.element__delete').addEventListener('click', function (evt) {
        evt.target.parentElement.remove();
    });

    CardElement.querySelector('.element__image').addEventListener('click', function (evt) {
        popupImageOpenToggle();
        popupImageLink.src = item.link;
        popupImageText.textContent = item.name;
    });

    return CardElement;
}

function AddCard(CardElement){
    Cardplace.prepend(CardElement);
}

initialCards.forEach(function(item){
    const cardAppend = CreateCard(item);
    AddCard(cardAppend);
});

popupOpenButton.addEventListener('click', popupOpenToggle);
AddCardButton.addEventListener('click', popupOpenToggle1);

popupCloseButton.addEventListener('click', popupOpenToggle);
popupCloseButton1.addEventListener('click', popupOpenToggle1);
popupImageClose.addEventListener('click', popupImageOpenToggle);

formElement.addEventListener('submit', formSubmitHandler);
formElement1.addEventListener('submit', formSubmitHandler1);