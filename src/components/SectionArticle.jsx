import React, { useContext } from "react";
import { GlobalContext } from '../App.jsx';
import Article from '../components/Article';
import QuantityButton from "./QuantityButton";
import Bar from "./Bar.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);


function SectionArticle({ articles, sectionName, sectionIcon, alignLeft = true }) {

    const icon = sectionIcon ? fas[sectionIcon] : null;

    return (
        <section>
            <div className="w-full h-12 flex flex-wrap justify-center items-center">
                {alignLeft === true ?
                    <div className=" lg:w-10/12 sm:w-full h-full bg-dark-color flex items-center px-5">
                        {sectionIcon && (
                            <FontAwesomeIcon
                                icon={icon}
                                className={`text-light-color p-3 text-xl`}
                            />
                        )}
                        <p className="text-light-color sm:text-lg lg:text-xl">{sectionName}</p>
                    </div> :
                    <div className=" lg:w-10/12 sm:w-full h-full bg-dark-color flex justify-end items-center px-5">
                        <p className="text-light-color text-xl">{sectionName}</p>
                        {sectionIcon && (
                            <FontAwesomeIcon
                                icon={icon}
                                className={`text-light-color p-3 text-xl`}
                            />
                        )}
                    </div>
                }
            </div>
            <Bar width="lg:w-4/5 sm:w-full" height="h-1" className="w-full mt-5" />
            <div className='flex flex-wrap justify-center'>
                {articles.map(article => (
                    <Article key={article.id} article={article} bar={false} />
                ))}
            </div>
            <Bar width="lg:w-4/5 sm:w-full" height="h-1" className="w-full" />
            
        </section>
    )
}

export default SectionArticle;