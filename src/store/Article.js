import { makeAutoObservable } from "mobx";

class Article {

    // Attributs
    _id;
    _name;
    _description;
    _price;
    _pictures;
    _quantity;
    _alt;
    _duration;
    _attendance;
    _infos;


    // Constructeur
    constructor (id, name, description, price, pictures, quantity, alt, duration, attendance, infos) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._price = price;
        this._pictures = pictures;
        this._quantity = quantity;
        this._alt = alt;
        this._duration = duration;
        this._attendance = attendance;
        this._infos = infos;
        makeAutoObservable(this);
    }

    // Accesseurs de lecture
    get id() { return this._id; }
    get name() { return this._name; }
    get description() { return this._description; }
    get price() { return this._price; }
    get pictures() { return this._pictures; }
    get quantity() { return this._quantity; }
    get alt() { return this._alt; }
    get duration() { return this._duration; }
    get attendance() { return this._attendance; }
    get infos() { return this._infos; }

    // Accesseurs d'écriture
    set name (name) { this._name = name; }
    set description (description) { this._description = description; }
    set price (price) { this._price = price; }
    set pictures (pictures) { this._pictures = pictures; }
    set quantity (quantity) { this._quantity = quantity; }
    set alt(alt) { this._alt = alt; }
    set duration(duration) { this._duration = duration; }
    set attendance(attendance) { this._attendance = attendance; }
    set infos(infos) { this._infos = infos; }
}
export default Article;