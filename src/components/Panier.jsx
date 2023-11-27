import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";
import Bar from "./Bar";
import QuantityButton from './QuantityButton';
import ColorButton from './ColorButton.jsx';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


function Panier() {

  const { cartStore } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [displayCart, setDisplayCart] = useState(cartStore.cart.length > 0);
  const bgContentElement = document.querySelector(".bg-content");

  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(true);


  useEffect(() => {
    if (cartStore.cart.length === 0 && !isAnimatingOut && displayCart) {
      setIsAnimatingOut(true);
      setTimeout(() => {
        setIsAnimatingOut(false);
        setDisplayCart(false);
      }, 500);
    } else if (cartStore.cart.length > 0 && !displayCart) {
      setDisplayCart(true);
      setIsCartOpen(true);
    }
  }, [cartStore.cart.length, displayCart, isAnimatingOut]);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    clearStorage();
    navigate('/home');
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const clearStorage = () => {
    cartStore.clearLocalStorage();
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <>

      {displayCart && (
        <div className={`${!isCartOpen ? 'sm:limited-actions-bg' : ''}`}>
          <div className={`w-11/12 ${!isCartOpen ? '' : 'sm:max-h-14'} sm:px-6 sm:pb-6 lg:p-6 border-custom fixed flex flex-col bg-light-color-lightened lg:h-50 right-1/2 bottom-0 + ${cartStore.cart.length > 0 ? ' slide-in-panier' : ' slide-out-panier'}`}>
            <button onClick={toggleCart} className="sm:block lg:hidden bg-light-color-lightened text-2xl my-3 ">
              {isCartOpen ? (
                <FontAwesomeIcon icon={faArrowUp} />
              ) : (
                <FontAwesomeIcon icon={faArrowDown} />
              )}
            </button>
            <div className="flex sm:flex-col justify-center  basis-1/4 items-stretch justify-evenly">
              <div className='flex items-center sm:justify-center'>
                <div className='h-3/5 lg:border-r-2 sm:py-2 sm:border-b-2 border-dark-color text-2xl lg:pr-4 flex items-center'>
                  <h2 className=''>Ma commande</h2>
                </div>
              </div>

              <ul className='cart-classes bg-light-color-dark shadow-inner-shadow basis-2/3 flex flex-wrap p-4 my-5 lg:max-h-52 sm:max-h-[26rem]'>
                {cartStore.cart.map(article => (
                  <li key={article.id} className='w-full sm:pb-4'>
                    <div className='w-full py-1 flex items-center justify-between'>
                      <p className='text-standard-size flex-1'>{article.name}</p>
                      <div className='flex items-center justify-between lg:w-5/12 sm:w-2/6 sm:ml-4 sm:my-2' >
                        <div className='w-7/12 sm:hidden lg:block'>
                          <QuantityButton article={article} small={true} className="w-full" />
                        </div>
                        <Bar row={false} height="lg:h-12 sm:h-6" />
                        <p className='lg:text-2xl sm:text-xl'>{article.price * article.quantity} $</p>
                      </div>
                    </div>
                    <div className='w-full sm:flex lg:hidden justify-center'>
                      <QuantityButton article={article} className="w-2/3" />
                    </div>
                  </li>
                ))}
                <div className='flex justify-between items-center w-full  pt-4 border-t-4 pr-1/2 border-dark-color'>
                  <p className='text-2xl'>Total du panier</p>
                  <p className='text-2xl'>{cartStore.getGrossCartTotal()} $</p>
                </div>
              </ul>
            </div>
            <ul className='flex sm:flex-col lg:justify-between sm:items-center lg:mt-10'>
              <ColorButton label="Abandonner ma commande" onClick={handleDeleteClick} RedBg={true} className='my-6' />
              <ColorButton label="Confirmer ma commande" link="/summary" GreenBg={true} className='sm:hidden lg:block' />
              <ColorButton label="Voir le récapitulatif" link="/summary" GreenBg={true} className='sm:block lg:hidden' />
            </ul>
          </div>

          {/*Modal de confirmation*/}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-light-color p-4 rounded shadow h-48 lg:w-1/2 sm:w-5/6 flex flex-col justify-evenly">
                <p className='text-center lg:text-xl sm:text-lg'>Souhaitez vous vraiment abandonner votre commande ?</p>
                <div className="flex justify-evenly mt-4 h-2/5">
                  <ColorButton onClick={handleModalCancel} label="Annuler" height="h-full" RedBg={true} className='text-light-color' width='sm:w-2/5 lg:w-1/3' />
                  <ColorButton onClick={handleModalConfirm} label="Confirmer" height="h-full" GreenBg={true} className='text-light-color' width='sm:w-2/5 lg:w-1/3' />
                </div>
              </div>
            </div>
          )}
        </div>
      )
      }
    </>
  )
}

export default observer(Panier);