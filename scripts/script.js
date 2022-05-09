const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupEditButton = popup.querySelector('.popup__button-save')

const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_name');
const jobInput = popup.querySelector('.popup__input_job');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function popupOpenToggle() {
    popup.classList.toggle('popup_is-opened');
    if (popup.classList.contains('popup_is-opened'))
    {
        nameInput.value = profileTitle.textContent;
        jobInput.value = profileDescription.textContent;
    }
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    let name = nameInput.value;
    let job = jobInput.value;
    profileTitle.textContent = name;
    profileDescription.textContent = job;
    popupOpenToggle();
}

popupOpenButton.addEventListener('click', popupOpenToggle);
popupCloseButton.addEventListener('click', popupOpenToggle);

formElement.addEventListener('submit', formSubmitHandler);