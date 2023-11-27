import { makeAutoObservable } from "mobx";

const TPS_VALUE = 0.05;
const TVQ_VALUE =  0.09975;


class CartStore {
    _cart; // Tableau pour stocker les articles du panier

    constructor() {
        let currentCart = localStorage.getItem("Panier");
        if (currentCart === null) {
            this._cart = [];
        } else {
            this._cart = JSON.parse(currentCart);
        }

        makeAutoObservable(this);
    }

    get cart() { return this._cart; }

    set cart(cart) { this._cart = cart; }

    //Sauvegarde le panier dans le localStorage
    saveCart() {
        localStorage.setItem("Panier", JSON.stringify(this.cart));
    }

    //Ajoute un article dans le panier
    addCart(article) {
        let foundArticle = this.cart.find(item => item.id === article.id);
        if (foundArticle !== undefined) {
            foundArticle.quantity++;
        } else {
            article.quantity = 1;
            this.cart.push(article);
        }
        this.saveCart();
    }

    //Retire un article du panier
    removeFromCart(article) {
        if (article.quantity > 1) {
            article.quantity--;
        } else {
            article.quantity = 0;
            this.cart = this.cart.filter(item => item.id !== article.id);
        }
        this.saveCart();
    }

    changeQuantity(article, quantity) {
        let foundArticle = this.cart.find(item => item.id === article.id);
        if (foundArticle !== undefined) {
            foundArticle.quantity += quantity;
            if (foundArticle.quantity <= 0) {
                this.removeFromCart(foundArticle);
            } else {
                this.saveCart();
            }
        }
    }

    //Récupère le nombre total d'articles dans le panier
    getNumberArticle() {
        let number = 0;
        for (let item of this.cart) {
            number += item.quantity;
        }
        return number;
    }

    //Récupère le montant total du panier
    getGrossCartTotal() {
        let total = 0;
        for (let item of this.cart) {
            total += item.quantity * item.price;
        }
        return this.round(total);
    }

     //Calcul TPS
     getTPS() {
        let tps = this.getGrossCartTotal() * TPS_VALUE;
        return this.round(tps);
    }

     //Calcul TVQ
     getTVQ() {
        let tvq = this.getGrossCartTotal() * TVQ_VALUE;
        return this.round(tvq);
    }

     //Récupère le montant total du panier avec taxes
     getCartTotalWithTaxes() {
        let total = this.getGrossCartTotal() + this.getTPS() + this.getTVQ();
        return this.round(total);
    }

    //Récupère la quantité d'un article présent dans le panier
    getQuantityForArticle(article) {
        const foundArticle = this.cart.find((item) => item.id === article.id);
        return foundArticle ? foundArticle.quantity : 0;
    }

    //Récupère le contenu du panier sous forme d'objet
    getCartContents() {
        const cartContents = [];
        for (const item of this.cart) {
            cartContents.push({
                id: item._id,
                name: item._name,
                quantity: item._quantity,
                price: item._price
            });
        }
        return cartContents;
    }

    //Appliquer une réduction fixe
    applyDiscount(number) {
        return this.getCartTotalWithTaxes - number;
    }

    // Vide le localStorage
    clearLocalStorage() {
        localStorage.removeItem("Panier");
        for (const item of this.cart) {
            if (item.quantity !== 0) {item.quantity = 0}
        }
        this._cart = [];
        this.saveCart();
    }

    //arrondir au centième
    round(number) {
        const decimalCount = number.toString().split('.')[1]?.length || 0;
        if (decimalCount >= 3) {
            number = parseFloat(number.toFixed(2)); 
        }

        return number;
    }

}

export default CartStore;