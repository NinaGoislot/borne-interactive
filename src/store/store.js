import ArticleStore from "./ArticleStore";
import CartStore from "./CartStore";

export const store = {
  articleStore: new ArticleStore(),
  cartStore: new CartStore(),
};
