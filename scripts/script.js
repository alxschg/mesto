const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupEditButton = popup.querySelector('.popup__button-save')

const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('#nameInput');
const jobInput = popup.querySelector('#jobInput');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function popupOpenToggle() {
    popup.classList.toggle('popup_is-opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    let name = nameInput.value;
    let job = jobInput.value;
    profileTitle.textContent = name;
    profileDescription.textContent = job;
}

popupOpenButton.addEventListener('click', popupOpenToggle);
popupCloseButton.addEventListener('click', popupOpenToggle);
popupEditButton.addEventListener('click', popupOpenToggle);

formElement.addEventListener('submit', formSubmitHandler);