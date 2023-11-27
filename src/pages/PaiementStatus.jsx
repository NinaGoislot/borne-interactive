import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../App.jsx';

function PaiementStatus() {

    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const { cartStore } = useContext(GlobalContext);
    
    const location = useLocation();
    const propsFromPreviousPage = location.state;
  
    const paymentSuccess = propsFromPreviousPage.success ? propsFromPreviousPage.success : true;
    const textSuccess = propsFromPreviousPage.textSuccess;
    const textRefused = propsFromPreviousPage.textRefused;
    const discountValue = propsFromPreviousPage.discount;

    useEffect(() => {
        // Délai de 3 secondes avant de déclencher la redirection
        const timer = setTimeout(() => {
            setRedirect(true);
            cartStore.applyDiscount(discountValue);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (redirect) {
        navigate('/PaiementStatus', {
            state: {
                payement: false
            }
        });
    }

    const bgColor = paymentSuccess === true ? 'bg-valid-color' : 'bg-error-color'

    return (
        <main className='paiement-section justify-center items-center'>
            <div className={`flex flex-col justify-center items-center w-2/5 ${bgColor} lg:h-2/5 gap-y-12`}>
                {paymentSuccess ? <FontAwesomeIcon icon="fa-solid fa-check" className='paiement-icon text-light-color' /> : <FontAwesomeIcon icon="fa-solid fa-xmark" className='paiement-icon text-light-color' />}
                <h2 className='italic text-5xl text-center'>{paymentSuccess ? textSuccess : textRefused}</h2>
            </div>
        </main> 
    )
}
export default PaiementStatus;