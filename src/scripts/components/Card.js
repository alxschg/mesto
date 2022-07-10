export default class Card {
  constructor(data, cardSelector, userId, api, handleImageClick, handleDeleteClick) {
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

    const elementImage = this._element.querySelector('.element__image');

    this._setEventListeners();
    this._hasDeleteCart();

    this._likesQuantity.textContent = this._likes.length;
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }


  //Для изменения лайка
  _handleLikeCard() {
    this._likeButton = this._element.querySelector('.element__like');
    this._likesQuantity = this._element.querySelector('.element__like-quantity');
    if (this._likeButton.classList.contains('element__like_active')) {
      this._api.deleteLike(this._cardId)
         .then((res) => {
          this._likeButton.classList.remove('element__like_active');
          this._likesQuantity.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(err);
        });
  }
    else{
      this._api.putLike(this._cardId)
        .then((res) => {
          this._likeButton.classList.add('element__like_active');
          this._likesQuantity.textContent = res.likes.length;
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
  }}



  _setEventListeners(){
    //Слушатель кнопки like
    this._element.querySelector('.element__like').addEventListener('click', () => {
        this._handleLikeCard();
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

  _hasDeleteCart() {
    if (this._userId !== this._ownerId) {
      this._element.querySelector('.element__delete').remove();
    }
  }
  };