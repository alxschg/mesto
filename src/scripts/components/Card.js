export default class Card {
  constructor(data, cardSelector, userId, api, handleImageClick, handleDeleteClick, handlePutLike, handleDeleteLike) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._cardId = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._api = api;
    this._likes = data.likes;
    this._handleDeleteLike = handleDeleteLike;
    this._handlePutLike = handlePutLike;
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
    this._likesQuantity = this._element.querySelector('.element__like-quantity');

    this._likeButton = this._element.querySelector('.element__like');
    this._likesQuantity = this._element.querySelector('.element__like-quantity');
    const elementImage = this._element.querySelector('.element__image');

    this._isLiked();
    this._setEventListeners();
    this._hasDeleteCart();

    this._likesQuantity.textContent = this._likes.length;
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }

  deleteCard(){
      this._element.remove();
      this._element = null;
  }

  handleLikeCard(data) {
    this._likes = data.likes;
    this._likesQuantity.textContent = this._likes.length;
    this._likeButton.classList.toggle('element__like_active');
   }


  _setEventListeners(){
    //Слушатель кнопки like
    this._element.querySelector('.element__like').addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__like_active')) {
        this._handleDeleteLike(this._cardId);
      }
      else{ this._handlePutLike(this._cardId);
      }
    });

    //Слушатель открытия попапа удаления карточки
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDeleteClick(this._element, this._cardId);
   });

    //Слушатель открытия попапа изображения
    this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handleImageClick();
     });
  }

  _isLiked() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._likeButton.classList.add('element__like_active');
    }
  }


  _hasDeleteCart() {
    if (this._userId !== this._ownerId) {
      this._element.querySelector('.element__delete').remove();
    }
  }
  };