import React from 'react';
import NavItem from './Navitem';


function Nav({ page }) {

    return (
        <nav className='w-full flex lg:justify-between sm:justify-end items-center lg:px-10 sm:mt-10 sm:mb-6 sm:px-6'>
            <div className='w-52 sm:hidden lg:block'>
                <img className={`w-full`} src="../../Noir_Logo_Musee_Lexplorateur.svg" alt="Logo du musée l'explorateur" />
            </div>

            <ul className='h-16 lg:w-48 sm:w-40'>
                {page === 'expositions' ?
                    <NavItem name="Extras" link="/extras" />
                    : page === 'extras' ?
                        <NavItem name="Expositions" link="/expositions" />
                        : ''}
            </ul>
        </nav>
    );
}

export default Nav;