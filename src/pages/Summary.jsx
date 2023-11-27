import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from 'react';
import QuantityButton from '../components/QuantityButton';
import Bar from "../components/Bar";
import ColorButton from '../components/ColorButton.jsx';
import NavPaiement from '../components/NavPaiement.jsx';
import { useNavigate } from 'react-router-dom';

function Summary() {
    const { cartStore } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

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

    return (
        <main className='paiement-section justify-between'>
            <NavPaiement />
            <div className='flex justify-center w-full sm:mt-10'>
                <div className='lg:w-10/12'>
                    <h1 className='lg:text-5xl sm:text-center sm:text-4xl'>Panier</h1>
                    <ul className='basis-2/3 flex flex-wrap px-6 mt-10'>
                        {cartStore.cart.map(article => (
                            <li key={article.id} className='w-full pb-1 mb-1 flex sm:flex-col items-center justify-between lg:pb-4'>
                                <div className="flex sm:flex-col lg:justify-between lg:flex-1 sm:w-full">
                                    <div className='lg:border-l-2 lg:border-b-2 lg:w-3/5 sm:w-full lg:border-primary-color flex sm:justify-center items-center'>
                                        <p className='text-standard-size sm:text-center px-2 border-primary-color'>{article.name}</p>
                                    </div>
                                    <div className="justify-center items-center sm:hidden lg:flex ">
                                        <QuantityButton article={article} small={true} />
                                        <Bar row={false} height="h-5" className='px-2' />
                                    </div>
                                    <div className="justify-center items-center sm:flex lg:hidden w-full">
                                        <QuantityButton article={article} small={true} className='w-2/3' />
                                    </div>
                                </div>
                                <p className='w-16 lg:ml-4 sm:text-center'>{article.price} $</p>
                                <Bar width="w-full" height="h-full" className="w-full sm:flex lg:hidden h-2 my-3" />
                            </li>
                        ))}
                    </ul>
                    <Bar width="w-full" height="h-2" className="w-full mb-4" />
                    <ul className='flex flex-col flex-wrap p-6 my-5 max-h-64'>
                        <li>
                            <div className='flex justify-between flex-1'>
                                <div className='flex justify-between w-36'>
                                    <p>TPS</p>
                                    <p className='text-[#565656]'>+5%</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Bar row={false} height="h-5" className='px-2' />
                                    <p className='w-16 ml-4'>{cartStore.getTPS()} $</p>
                                </div>
                            </div>
                            <Bar width="w-full" className="my-2" color='bg-primary-color' />
                        </li>
                        <li>
                            <div className='flex justify-between flex-1'>
                                <div className='flex justify-between w-36'>
                                    <p>TVQ</p>
                                    <p className='text-[#565656]'>+9,975%</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Bar row={false} height="h-5" className='px-2' />
                                    <p className='w-16 ml-4'>{cartStore.getTVQ()} $</p>
                                </div>
                            </div>
                            <Bar width="w-full" className="my-2" color='bg-primary-color' />
                        </li>
                    </ul>
                    <div className='flex justify-between items-center w-full pt-4'>
                        <p className='text-2xl'>Prix total</p>
                        <p className='text-2xl'>{cartStore.getCartTotalWithTaxes()} $</p>
                    </div>
                    <div className="flex justify-end w-full mt-6">
                        <ColorButton label="Payer" link="/Paiement" GreenBg={true} width='w-36' />
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full mt-6">
                <ColorButton label="Abandonner ma commande" onClick={handleDeleteClick} RedBg={true} />
            </div>

            {/*Modal de confirmation*/}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-light-color p-4 rounded shadow h-48 lg:w-1/2 sm:w-5/6 flex flex-col justify-evenly">
                        <p className='text-center lg:text-xl sm:text-lg'>Souhaitez vous vraiment abandonner votre commande ?</p>
                        <div className="flex justify-evenly mt-4 h-2/5">
                            <ColorButton onClick={handleModalCancel} label="Annuler" height="h-full" RedBg={true} className='text-light-color' width='sm:w-2/5' />
                            <ColorButton onClick={handleModalConfirm} label="Confirmer" height="h-full" GreenBg={true} className='text-light-color' width='sm:w-2/5' />
                        </div>
                    </div>
                </div>
            )}
        </main>
    )


}

export default observer(Summary);