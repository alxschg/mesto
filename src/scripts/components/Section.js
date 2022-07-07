export default class Section{
    constructor({items, renderer}, containerSelector){
        this._container = containerSelector; 
        this._items = items;
        this._renderer = renderer;   
    }

    renderItems(){
        this._items.forEach(data => {
            const elem = this._renderer(data);
            this.addItem(elem);
        });
    }

    addItem(element){
        this._container.prepend(element);
    }
}

