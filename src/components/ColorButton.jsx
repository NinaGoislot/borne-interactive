import React from 'react';
import { Link } from 'react-router-dom';


/**
Obligatoire pour le composant : 
→ Un title ou un label
→ Une couleur de background (mettre GreenBg ou RedBg à true)
**/


function ColorButton({ link, label, title, onClick, width, height, GreenBg = false, RedBg = false, className}) {

    const buttonTitle = title || label;
    const w = width || "lg:w-1/3 sm:w-4/5";
    const h = height || "lg:h-16 sm:h-16";
    const bgColor = GreenBg === true ? 'bg-valid-color' : RedBg === true ? 'bg-error-color' : '';

    if (!label && !title) {
        console.log("Aucun label ou titre n'ont été défini.")
    }

    return (

        <button
            className={`${h} ${w} ${bgColor} ${className} lg:text-xl sm:text-lg shadow-button-shadow`}
            title={buttonTitle}
            onClick={onClick}>

            <Link to={link} className='flex justify-center'>
                {label && <span>{label}</span>} 
            </Link>
        </button>
    )
}

export default ColorButton;