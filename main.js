/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={formSelector:".form",inputError:"popup__input_type_error",inputErrorActive:"popup__input-error_active",formInput:".popup__input",formButton:".popup__button-save",formFieldset:".popup__fieldset"},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),r=document.querySelector(".profile__avatar-button"),o=(document.querySelector(".element__delete"),document.querySelector("#edit-profile")),i=document.querySelector("#create-card"),a=document.querySelector("#avatar-popup"),c=o.querySelector(".popup__form"),u=i.querySelector(".popup__form"),l=a.querySelector(".popup__form"),s=o.querySelector(".popup__input_type_name"),f=o.querySelector(".popup__input_type_job"),p=document.querySelector(".elements__list");function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".profile__avatar");var h=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._cardSelector=n,this._handleImageClick=r,this._handleDeleteClick=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__image");return this._setEventListeners(),e.src=this._link,e.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._element}},{key:"_handleLikeCard",value:function(){this._element.querySelector(".element__like").classList.toggle("element__like_active")}},{key:"_handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleLikeCard()})),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._handleDeleteClick(e._card,e._cardId)})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleImageClick()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=_((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"_hideInputError",(function(e){var t=r._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(r._inputError),t.classList.remove(r._inputErrorActive),t.textContent=""})),v(this,"_showInputError",(function(e,t){var n=r._form.querySelector("#".concat(e.id,"-error"));e.classList.add(r._inputError),n.textContent=t,n.classList.add(r._inputErrorActive)})),v(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),v(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),v(this,"toggleButtonState",(function(){r._hasInvalidInput()?r._buttonElement.setAttribute("disabled","disabled"):r._buttonElement.removeAttribute("disabled")})),v(this,"_setEventListeners",(function(){r.toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))})),r._close.addEventListener("click",(function(){r._inputList.forEach((function(e){r._hideInputError(e)}))}))})),v(this,"enableValidation",(function(){r._form.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners()})),this._form=n,this._close=this._form.querySelector(".popup__close"),this._formSelector=t.formSelector,this._inputError=t.inputError,this._inputErrorActive=t.inputErrorActive,this._formInput=t.formInput,this._formButton=t.formButton,this._formFieldset=t.formFieldset,this._inputList=Array.from(this._form.querySelectorAll(this._formInput)),this._buttonElement=this._form.querySelector(this._formButton)}));function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=r}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.addItem(t._renderer(e))}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(){return S(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".popup__image"),r=this._popup.querySelector(".popup__image-text");n.src=t,n.alt=e,r.textContent=e,j(I(a.prototype),"open",this).call(this)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function N(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".form"),n._submitButton=n._popup.querySelector(".popup__button-save"),n._submitText=n._submitButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e,t=function(e){if(Array.isArray(e))return A(e)}(e=this._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n={};return t.forEach((function(e){n[e.name]=e.value})),n}},{key:"setEventListeners",value:function(){var e=this;x(D(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){x(D(a.prototype),"close",this).call(this),this._form.reset()}},{key:"loading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitText}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._aboutNameElement=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,aboutName:this._aboutNameElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._nameElement.textContent=t,this._aboutNameElement.textContent=n,this._avatar.src=r}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"editProfil",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.aboutName})}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.imageName,link:e.imageLink})}).then((function(e){return t._checkResponse(e)}))}},{key:"like",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatarLink})}).then((function(e){return t._checkResponse(e)}))}},{key:"getInitialCards",value:function(){}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=K(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},G.apply(this,arguments)}function K(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=X(e)););return e}function Q(e,t){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Q(e,t)}function W(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(r);if(o){var n=X(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return W(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleConfirmationCallback=t,n._confirmButton=n._popup.querySelector(".popup__button-save"),n}return t=a,(n=[{key:"renderLoading",value:function(e){this._confirmButton.textContent=e?"Удаление...":"Да"}},{key:"open",value:function(e,t){this._card=e,this._cardId=t,G(X(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;G(X(a.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(t){t.preventDefault(),e._handleConfirmationCallback(e._card,e._cardId)}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ee=new H({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"91c374b9-c64e-4621-8c13-f2fddf25afb9","Content-Type":"application/json"}});Promise.all([ee.getUserInfo(),ee.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];re.setUserInfo(o),i._id,o._id,ne.renderItems(i)})).catch((function(e){console.log(e)})),t.addEventListener("click",(function(){var e=re.getUserInfo(),t=e.name,n=e.aboutName;s.value=t,f.value=n,oe.open()})),n.addEventListener("click",(function(){ie.open()})),r.addEventListener("click",(function(){ae.open()}));var te=function(e){var t=new h(e,"#element-card",(function(){ue.open(e.name,e.link)}),(function(){ce.open(t,e._id)})).createCard();return t},ne=new g({renderer:te},p),re=new J(".profile__title",".profile__description",".profile__avatar"),oe=new V("#edit-profile",(function(e){oe.loading(!0),ee.editProfil(e).then((function(e){re.setUserInfo(e),oe.close()})).catch((function(e){console.log(e)})).finally((function(){oe.loading(!1)}))}));oe.setEventListeners();var ie=new V("#create-card",(function(e){ie.loading(!0),ee.addNewCard(e).then((function(e){var t=te(e);ne.addItem(t),ie.close(),le.toggleButtonState()})).catch((function(e){console.log(e)})).finally((function(){ie.loading(!1)}))}));ie.setEventListeners();var ae=new V("#avatar-popup",(function(e){ae.loading(!0),ee.editAvatar(e).then((function(e){re.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){ae.loading(!1)})),ae.close(),le.toggleButtonState()}));ae.setEventListeners();var ce=new Y("#delete-popup",(function(e,t){ee.deleteCard(t).then((function(){e.remove(),deleteCardPopup.close()})).catch((function(e){console.log(e)})),ce.close()}));ce.setEventListeners();var ue=new q("#image-card");ue.setEventListeners(),new b(e,c).enableValidation();var le=new b(e,u);le.enableValidation(),new b(e,l).enableValidation()})();