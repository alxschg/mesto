export default class Section{
    constructor(renderer, container){
        this._container = container; 
        this._renderer = renderer;   
    }

    renderItems(data){
        data.forEach(item => {
            this._container.append(this._renderer(item));
        });
    }

    addItem(element){
        this._container.prepend(element);
    }
}