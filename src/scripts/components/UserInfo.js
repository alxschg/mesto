export default class UserInfo{
    constructor(nameSelector, aboutNameSelector, avatar){
        this._nameElement = document.querySelector(nameSelector);
        this._aboutNameElement = document.querySelector(aboutNameSelector);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo(){
        return{
            name: this._nameElement.textContent,
            aboutName: this._aboutNameElement.textContent
        };
    }

    setUserInfo({name, about, avatar}){
        this._nameElement.textContent = name;
        this._aboutNameElement.textContent = about;
        this._avatar.src = avatar;
    }
}