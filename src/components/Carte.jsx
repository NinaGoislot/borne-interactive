import { GlobalContext } from '../App.jsx';
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from 'react';

function Carte() {
    const { cartStore } = useContext(GlobalContext);


    return (

        <div>
        <div className='flex justify-center items-center mt-20'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#121517"/>
            </svg> 
            <div className='p-[2px] w-[30%] bg-dark-color'></div>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="36" cy="36" r="20" transform="rotate(-180 36 36)" fill="#63579E"/>
                <circle cx="36" cy="36" r="34" transform="rotate(-180 36 36)" stroke="#121517" stroke-width="4"/>
            </svg> 
        </div>
        <div className='flex mt-60 justify-center items-center'>
         <div className='flex bg-dark-color text-white w-[680px] p-3 justify-center items-center gap-6 self-stretch'>
            <p>RESTE À PAYER :</p>
            <p className='text-2xl'>{cartStore.getGrossCartTotal()} $</p>
            </div>
        </div>
        </div>

        )


    }
    
    export default observer(Carte);