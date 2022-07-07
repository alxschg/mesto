export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
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

    const elementImage = this._element.querySelector('.element__image');

    this._setEventListeners();

    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
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
        this._handleImageClick();
     });
  }
  };