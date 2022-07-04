//Функция открытия и закрытия popup
const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keyup', closeEsc);
}
const closePopup = (popup) => {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', closeEsc);
}

//Закрытие попапа esc
const closeEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popupIsOpened = document.querySelector('.popup_is-opened');
        closePopup(popupIsOpened);
};
}

export{openPopup, closePopup, closeEsc};