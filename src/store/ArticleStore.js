import { makeAutoObservable } from "mobx";
import Article from "./Article";

class ArticleStore {


    // Attributs
    _articles;

    // Constructeur
    constructor() {
        this._articles = [];

        makeAutoObservable(this);
        this.loadArticles();
    }

    // Accesseur en lecture
    get articles() {
        return this._articles;
    }

    // Accesseur en écriture
    set articles(articles) {
        this._articles = articles;
    }

    // Méthodes

    async loadArticles() {
        try {
            // Charger le fichier JSON
            const response = await fetch("../data.json");
            const data = await response.json();

            // Transformer les données en objets Article et les stocker dans this._articles
            this._articles = data.map(article => new Article(
                article.id,
                article.name,
                article.description,
                article.price,
                article.pictures,
                article.quantity,
                article.alt,
                article.duration,
                article.attendance,
                article.infos,
            ));

            console.log(this._articles);
        } catch (error) {
            console.error("Erreur lors du chargement des articles :", error);
        }
    }


    increaseQuantity(id) {
       
    }

    getArticleById(id) {
        return this._articles.find(article => article.id === id);
    }

}

export default ArticleStore;