import React, { useContext } from 'react';
import { GlobalContext } from '../App.jsx';
import NavPaiement from '../components/NavPaiement.jsx';
import PaiementCard from '../components/PaiementCard.jsx';
import InstructionBanner from '../components/InstructionBanner.jsx';
import ArianeThread from '../components/ArianeThread.jsx';

function CardPaiement() {



    const { cartStore } = useContext(GlobalContext);

    return (
        <main className='paiement-section lg:justify-between'>
            <NavPaiement />
            <ArianeThread step={1} />
            <div className='flex justify-center w-full h-full'>
                <div className='lg:w-3/5 lg:mt-40 sm:w-full sm:flex sm:flex-col sm:gap-y-6'>
                    <InstructionBanner text="Reste à payer :" amount={cartStore.getCartTotalWithTaxes()} />
                    <div className='flex sm:flex-col justify-between lg:h-2/5 lg:w-full lg:my-20 sm:gap-y-6'>
                        <PaiementCard text="Carte crédit" className="lg:mr-6" />
                        <PaiementCard text="Carte débit" />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default CardPaiement;