import React, { useContext } from 'react';
import { GlobalContext } from '../App.jsx';
import NavPaiement from '../components/NavPaiement.jsx';
import PaiementCard from '../components/PaiementCard.jsx';
import InstructionBanner from '../components/InstructionBanner.jsx';
import ArianeThread from '../components/ArianeThread.jsx';

function Paiement() {

    const { cartStore } = useContext(GlobalContext);

    return (
        <main className='paiement-section lg:justify-between'>
            <NavPaiement />
            <ArianeThread step={1} />
            <div className='flex justify-center w-full h-full'>
                <div className='sm:w-full lg:w-3/5 lg:mt-40 sm:flex sm:flex-col sm:gap-y-6'>
                    <InstructionBanner text="Reste à payer :" amount={cartStore.getCartTotalWithTaxes()} />
                    <div className='flex sm:flex-col justify-between lg:h-2/5 lg:w-full lg:my-20 sm:gap-y-6'>
                        <PaiementCard icon="fa-money-bill-1" text="Payer en argent comptant" className="lg:mr-6" />
                        <PaiementCard icon="fa-credit-card" text="Payer par carte" link="/cardPaiement" className='sm:flex-row-reverse'/>
                    </div>
                    <div className="flex justify-center">
                        <PaiementCard text="Utiliser une carte cadeau" link='/GiftCard' width='lg:w-3/5 sm:w-4/5' />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Paiement;