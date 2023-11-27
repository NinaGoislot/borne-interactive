import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';

function PaiementCard({icon, link, text, height = "h-full", width = "lg:w-1/2 sm:w-full", className}) {

    /** Nous posssédons un compte gratuit de fontAwesome. 
     * Nous sommes donc limités dans l'utilisation d'icones sous la forme regular.
     * Sur ce composant nous importons donc directement l'objet icone depuis la bibliotèque pour pouvoir l'utiliser
    */

    const choosenIcon = icon === "fa-credit-card" ? faCreditCard : icon === "fa-money-bill-1" ? faMoneyBill1 : '';
    

    return (
        <Link className={`flex lg:flex-col sm:items-center sm:gap-x-4 ${!icon ? 'justify-center' : 'justify-between'} ${height} ${width} lg:py-12 lg:px-12 sm:p-6 bg-light-color-lightened border-custom shadow-card-shadow ${className}`} to={link}>
            {icon &&  <FontAwesomeIcon icon={choosenIcon} className="lg:w-full lg:paiement-icon text-primary-color sm:text-6xl"/>}
            <h2 className="lg:text-5xl sm:text-3xl italic text-center">{text}</h2>
        </Link>
  
    )
}

export default PaiementCard;