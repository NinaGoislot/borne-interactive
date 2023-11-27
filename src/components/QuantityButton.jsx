import React, { useContext, useState, useEffect } from "react";
import Button from "./Button";
import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";

function QuantityButton({ row = true, className, article, small, popUp = false }) {

    const { cartStore } = useContext(GlobalContext);
    const direction = row ? "row" : "col";
    const [animationClass, setAnimationClass] = useState('');
    const [animationKey, setAnimationKey] = useState(0);
    const disabled = article.quantity > 0 ? false : true;
    const test = article.quantity;
    const [previousQuantity, setPreviousQuantity] = useState(cartStore.getQuantityForArticle(article));
    const [isFirstRender, setIsFirstRender] = useState(true);


    const handleAddToCart = () => {
        cartStore.addCart(article);
    };

    const handleRemoveFromCart = () => {
        cartStore.removeFromCart(article);
    };

    useEffect(() => {
        const currentQuantity = cartStore.getQuantityForArticle(article);

        if (!isFirstRender) {
            if (currentQuantity > previousQuantity) {
                if (row) {
                    setAnimationClass('slide-left-animation');
                } else {
                    setAnimationClass('slide-up-animation');
                }
                setAnimationKey(prev => prev + 1);
            } else if (currentQuantity < previousQuantity) {
                if (row) {
                    setAnimationClass('slide-right-animation');
                } else {
                    setAnimationClass('slide-down-animation');
                }
                setAnimationKey(prev => prev + 1);
            }
        } else {
            setIsFirstRender(false);
        }

        setPreviousQuantity(currentQuantity);
    }, [cartStore.getQuantityForArticle(article)]);


    return (

        <div className={`flex flex-${direction} justify-between items-center ${className && className}`}>
            {row === false
                ? <Button title="Ajouter" icon="faPlus" onClick={handleAddToCart} small={small && small === true ? true : false} />
                : <Button title="Retirer" icon="faMinus" onClick={handleRemoveFromCart} small={small && small === true ? true : false} disabled={disabled} />}
            <p key={animationKey} className={`p-3 ${popUp === true ? `lg:text-4xl sm:text-3xl` : `text-2xl`} ${animationClass}`}>
                {cartStore.getQuantityForArticle(article)}
            </p>
            {row === false
                ? <Button title="Retirer" icon="faMinus" onClick={handleRemoveFromCart} small={small && small === true ? true : false} disabled={disabled} />
                : <Button title="Ajouter" icon="faPlus" onClick={handleAddToCart} small={small && small === true ? true : false} />}
        </div>

    )
}

export default observer(QuantityButton);