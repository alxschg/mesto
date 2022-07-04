import { popupImageLink,  popupImageText, popupImage} from "./const.js";
import { openPopup} from "./script.js";

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  
    return cardElement;
  }

  //Функция создания card
  createCard(){
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
  
  //Для открытия попапа
  _handleOpenPopup() {
    popupImageLink.src = this._link;
    popupImageLink.alt = this._name;
    popupImageText.textContent =this._name;
    openPopup(popupImage);
  }

  //Для изменения лайка
  _handleLikeCard() {
    const likeButton = this._element.querySelector('.element__like');
    likeButton.classList.toggle('element__like_active');
  }

  //Для удаления карточки
  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {

    //Слушатель кнопки like
    this._element.querySelector('.element__like').addEventListener('click', () => {
        this._handleLikeCard();
    });

    //Слушатель кнопки delete
    this._element.querySelector('.element__delete').addEventListener('click', () => {
        this._handleDeleteCard();
    });

    //Слушатель открытия попапа
    this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handleOpenPopup();
     });
  }
  };