import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);

function InstructionBanner({text, icon, amount}) {

    return (

        <div className="flex w-full bg-dark-color text-light-color">
            <div className="flex items-center w-1/2` px-6 py-4">
                <p className={`text-2xl max-w-4/5 ${!icon && !amount ? 'w-full text-center' : 'mr-6'}`}>{text}</p>
                {amount && <p className="text-5xl">{amount} $</p>}
                {icon &&  <FontAwesomeIcon icon={icon} className="w-1/5 pl-6" />}
            </div>
        </div>
  
    )
}

export default InstructionBanner;