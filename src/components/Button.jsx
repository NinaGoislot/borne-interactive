import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

/**
Obligatoire pour le composant : 
→ Un title ou un label
→ En l'absence d'icon, le label devient obligatoire
**/


function Button({ icon, link, label, title, onClick, small=false, width, height, disabled = false }) {

    const selectedIcon = icon ? fas[icon] : null;
    const buttonTitle = title || label;

    if (!label && !icon) {
        console.log("Aucune icon et aucun label n'ont été défini.")
        return null;
    }

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (

        <button
            className={`${small && small === true && width === undefined ? 'w-6' : width !== undefined ? width : 'w-12'}
                        ${small && small === true && height === undefined ? ' h-6' : height !== undefined ? height : 'h-12'}
                        text-xl rounded ${disabled === true ? 'disabled' : 'border-custom bg-light-color-lightened text-primary-color'}`}
            title={buttonTitle}
            onClick={handleClick}>

            <Link to={link} className='flex justify-center'>
                {label && <span>{label}</span>} 
                {selectedIcon && (
                    <FontAwesomeIcon
                        icon={selectedIcon}
                        className={`${label ? 'ml-1' : ''} ${small && small === true ? 'w-2/3 h-2/3' : ''}`}
                    />
                )}
            </Link>
        </button>
    )
}

export default Button;