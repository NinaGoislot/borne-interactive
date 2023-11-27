import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function NavItem({ name, link, className, iconRight = true, onClick }) {


    return (
        <li>
            <Link  className={`h-16 lg:py-2 px-5 text-xl bg-light-color-lightened border-custom shadow-button-shadow flex items-center justify-between ${className}`} onClick={onClick} to={link}>
                {iconRight === true ? <> <span className='lg:text-xl sm:text-lg'>{name}</span> <FontAwesomeIcon icon={faChevronRight} /></>
                    : <><FontAwesomeIcon icon={faChevronLeft} /><span className='lg:text-xl sm:text-lg'>{name}</span></>}
            </Link>
        </li>


    )
}


export default NavItem;