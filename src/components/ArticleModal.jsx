import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QuantityButton from './QuantityButton';
import Bar from './Bar';

function ArticleModal({ article, onClose }) {

  // Quitter la pop en cliquant en dehors
  const handleOutsideClick = (e) => {

    if (e.target.classList.contains('popup-background')) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 popup-background sm:py-6 sm:px-8" onClick={handleOutsideClick}>
      <div className="bg-light-color-lightened lg:w-4/5 lg:h-3/5 sm:w-full sm:h-full rounded-lg sm:h-full sm:overflow-y-scroll shadow-lg lg:p-12 sm:p-6 relative">
        <button className="lg:absolute sm:fixed sm:top-[1%] sm:right-[4%] lg:-right-3 lg:-top-3 m-0 p-0 bg-error-color rounded-full w-10 h-10 flex items-center justify-center cursor-pointer" onClick={onClose}><FontAwesomeIcon className="text-xl text-light-color" icon="fa-solid fa-xmark" /></button>
        <figure className="flex lg:h-2/5">
          <img className="w-full lg:h-auto sm:h-48 object-cover" src={`../../pictures/${article.pictures[0]}`} />
        </figure>

        <div className="flex sm:flex-col justify-between h-3/5 pt-6">
          <div className={`flex flex-col lg:w-8/12 sm:w-full lg:mr-12 ${article.infos !== "" ? "justify-between" : ""}`}>
            <div>
              <h3 className='lg:text-3xl sm:text-2xl py-2'>{article.name}</h3>
              <div className='flex flex-wrap lg:my-6 sm:my-1'>
                <p className='sm:text-sm'>{article.description}</p>
              </div>
            </div>
            {article.duration !== "" || article.attendance !== "" ?
              <div className='flex flex-col justify-between flex-1'>
                <div>
                  {article.duration !== "" ?
                    <div className='flex my-4'>
                      <p className='pr-2 font-bold sm:text-sm'>Durée de l'exposition : </p>
                      <p className='sm:text-sm'> {article.duration}</p>
                    </div> : ''}

                    {article.attendance !== "" ?
                    <div className='flex my-4 '>
                      <p className='pr-2 font-bold sm:text-sm'>Taux de fréquentation : </p>
                      <p className='sm:text-sm'> {article.attendance} %</p>
                    </div> : ''}
                </div>
                <p className='italic text-primary-color sm:text-sm sm:my-6'>* La durée et le taux de fréquentation sont donnés à titre d'indicatif et sont pas sources d'exactitude. Les données sont basées sur des observations mises à jours régulièrement.</p>
              </div> : ''}

            {article.infos !== "" ?
              <div className=''>
                <p className='italic text-primary-color sm:my-6'>*  {article.infos}</p>
              </div> : ''}
          </div>
          <div className=" lg:w-4/12 sm:w-full flex lg:flex-col sm:flex-col-reverse bg-light-color shadow-inner-shadow sm:mt-6 sm:pb-6 px-6 py-3 sm:border-t-[4px] sm:border-dark-color">
            <QuantityButton className={"h-full"} article={article} popUp={true} />
            <Bar width="w-full" height="h-2" className="w-full sm:py-2" />
            <div className="flex justify-center items-center w-full lg:pt-8 sm:pt-4">
              <p className='text-center lg:text-7xl sm:text-5xl text-primary-color'>{article.price} $</p>
            </div>
          </div>
          <div className='sm:block lg:hidden text-[#FFFCF4]'>Merci de votre confiance</div>
        </div>
      </div>
    </div>
  );
}

export default ArticleModal;



