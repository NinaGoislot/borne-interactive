import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../App.jsx';
import NavPaiement from '../components/NavPaiement.jsx'
import InstructionBanner from '../components/InstructionBanner.jsx';
import ArianeThread from '../components/ArianeThread.jsx';

function GiftCard() {
    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const { cartStore } = useContext(GlobalContext);

    useEffect(() => {
        // Délai de 3 secondes avant de déclencher la redirection
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (redirect) {
        navigate('/PaiementStatus', {
            state: {
                success: true,
                textSuccess: 'Carte cadeau acceptée',
                discount: 22
            }
        });
    }

    return (
        <main className='paiement-section lg:justify-between'>
            <NavPaiement />
            <ArianeThread step={1} />
            <div className='flex justify-center w-full h-full'>
                <div className='lg:w-3/5 lg:mt-40 sm:w-full'>
                    <InstructionBanner text="Reste à payer :" amount={cartStore.getCartTotalWithTaxes()} />
                    <div className='flex flex-col items-center justify-center w-full lg:pt-20 lg:gap-y-20 sm:pt-5 sm:gap-y-5'>
                        <svg className='sm:w-1/2' xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none">
                            <g clip-path="url(#clip0_129_2414)">
                                <path d="M0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0L52.5 0C54.4891 0 56.3968 0.790176 57.8033 2.1967C59.2098 3.60322 60 5.51088 60 7.5C60 9.48912 59.2098 11.3968 57.8033 12.8033C56.3968 14.2098 54.4891 15 52.5 15H15V52.5C15 54.4891 14.2098 56.3968 12.8033 57.8033C11.3968 59.2098 9.48912 60 7.5 60C5.51088 60 3.60322 59.2098 2.1967 57.8033C0.790176 56.3968 0 54.4891 0 52.5V7.5ZM180 7.5C180 5.51088 180.79 3.60322 182.197 2.1967C183.603 0.790176 185.511 0 187.5 0L232.5 0C234.489 0 236.397 0.790176 237.803 2.1967C239.21 3.60322 240 5.51088 240 7.5V52.5C240 54.4891 239.21 56.3968 237.803 57.8033C236.397 59.2098 234.489 60 232.5 60C230.511 60 228.603 59.2098 227.197 57.8033C225.79 56.3968 225 54.4891 225 52.5V15H187.5C185.511 15 183.603 14.2098 182.197 12.8033C180.79 11.3968 180 9.48912 180 7.5ZM7.5 180C9.48912 180 11.3968 180.79 12.8033 182.197C14.2098 183.603 15 185.511 15 187.5V225H52.5C54.4891 225 56.3968 225.79 57.8033 227.197C59.2098 228.603 60 230.511 60 232.5C60 234.489 59.2098 236.397 57.8033 237.803C56.3968 239.21 54.4891 240 52.5 240H7.5C5.51088 240 3.60322 239.21 2.1967 237.803C0.790176 236.397 0 234.489 0 232.5V187.5C0 185.511 0.790176 183.603 2.1967 182.197C3.60322 180.79 5.51088 180 7.5 180ZM232.5 180C234.489 180 236.397 180.79 237.803 182.197C239.21 183.603 240 185.511 240 187.5V232.5C240 234.489 239.21 236.397 237.803 237.803C236.397 239.21 234.489 240 232.5 240H187.5C185.511 240 183.603 239.21 182.197 237.803C180.79 236.397 180 234.489 180 232.5C180 230.511 180.79 228.603 182.197 227.197C183.603 225.79 185.511 225 187.5 225H225V187.5C225 185.511 225.79 183.603 227.197 182.197C228.603 180.79 230.511 180 232.5 180ZM60 60H75V75H60V60Z" fill="#63579E" />
                                <path d="M105 30H30V105H105V30ZM45 45H90V90H45V45ZM75 165H60V180H75V165Z" fill="#63579E" />
                                <path d="M105 135H30V210H105V135ZM45 150H90V195H45V150ZM165 60H180V75H165V60Z" fill="#63579E" />
                                <path d="M135 30H210V105H135V30ZM150 45V90H195V45H150ZM120 120V150H135V165H120V180H150V150H165V180H180V165H210V150H165V120H120ZM150 150H135V135H150V150ZM210 180H195V195H165V210H210V180ZM150 210V195H120V210H150Z" fill="#63579E" />
                                <path d="M180 135H210V120H180V135Z" fill="#63579E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_129_2414">
                                    <rect width="240" height="240" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='italic text-center lg:text-5xl sm:text-2xl'>Scannez le QR code sur votre carte</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default GiftCard;
