export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
  
    _checkResponse(res){
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`,
        {
            headers: this._headers
        })
        .then(res => this._checkResponse(res))
    }

    getCards(){
        return fetch(`${this._baseUrl}/cards`,{
            headers: this._headers
        })
        .then(res => this._checkResponse(res))
    }

    editProfil(data){
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.aboutName
            })
        })
        .then(res => this._checkResponse(res));
    }

    addNewCard(data){
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.imageName,
                link: data.imageLink
            })
        })
        .then(res => this._checkResponse(res));
    }

    deleteCard(idCard){
        return fetch(`${this._baseUrl}/cards/${idCard}`, {
            method: 'DELETE',
            headers: this._headers
          })
            .then(res => this._checkResponse(res));
        }
    
    editAvatar(data){
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatarLink
            })
        })
        .then(res => this._checkResponse(res));
    }  

    putLike(idCard){
        return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then(res => this._checkResponse(res));
    }

    deleteLike(idCard){
        return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(res => this._checkResponse(res));
    }
  }