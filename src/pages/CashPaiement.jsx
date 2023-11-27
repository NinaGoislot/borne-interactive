import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../App.jsx';
import InstructionBanner from '../components/InstructionBanner.jsx';
import ArianeThread from '../components/ArianeThread.jsx';

function CashPaiement() {

    const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);
    const { cartStore } = useContext(GlobalContext);

    useEffect(() => {
        // Délai de 10 secondes avant de déclencher la redirection
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 10000);

        return () => {
            clearTimeout(timer);
            cartStore.clearLocalStorage();
        };
    }, []);

    if (redirect) {
        navigate('/Screensaver', {
            state: {
                payment: false,
            }
        });
    }

    return (
        <main className='paiement-section lg:justify-between'>
            <ArianeThread step={2} />
            <div className='flex justify-center w-full h-full'>
                <div className='w-3/5 flex flex-col mt-40 gap-y-24'>

                    <h2 className=' text-center text-5xl'>Votre commande porte le numéro :</h2>

                    <p className='text-primary-color text-9xl text-center'>#{cartStore.getNumeroCommand()}</p>
                    <InstructionBanner text="Vous pouvez vous diriger vers le comptoir. Notre équipe vous souhaite une bonne visite !" icon={true} />
                   
                </div>
            </div>
        </main>
    )
}
export default CashPaiement;