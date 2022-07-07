export default class UserInfo{
    constructor({ nameSelector, aboutNameSelector}){
        this._nameElement = document.querySelector(nameSelector);
        this._aboutNameElement = document.querySelector(aboutNameSelector);
    }

    getUserInfo(){
        return{
            name: this._nameElement.textContent,
            aboutName: this._aboutNameElement.textContent
        };
    }

    setUserInfo(title, about){
        this._nameElement.textContent = title;
        this._aboutNameElement.textContent = about;
    }
}