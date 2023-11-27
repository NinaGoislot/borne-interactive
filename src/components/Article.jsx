import React, { useContext, useState } from "react";
import { GlobalContext } from '../App.jsx';
import QuantityButton from "./QuantityButton";
import Bar from "./Bar.jsx";
import ArticleModal from "./ArticleModal.jsx";


function Article({ article, popup = false, bar = true }) {

    const [showModal, setShowModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    const openModal = (article) => {
        setSelectedArticle(article);
        setShowModal(true);
        
        document.body.classList.add("no-scroll");
    };

    const closeModal = () => {
        setSelectedArticle(null);
        setShowModal(false);

        document.body.classList.remove("no-scroll");
    };

    return (
        <article className="flex flex-col flex-wrap justify-between sm:w-full lg:w-2/5 sm:my-2 lg-m-4 lg:p-2 items-center ">

            {bar === true ? <Bar width="w-full" height="h-2" className="w-full sm:my-2 lg:m-2" /> : ''}
            <div className="w-full flex justify-between flex-1 h-8/12">
                <div className="flex flex-col w-10/12 h-full">
                    <div className="w-full overflow-hidden relative flex-1 h-auto">
                            {popup === false
                                ? <img className="w-full h-full object-cover cursor-pointer" src={`../../pictures/${article.pictures[0]}`} onClick={() => openModal(article)} />

                                : <figure className="slider flex">
                                    {article.pictures.map(picture => (
                                        <img className="float-left " src={`../../pictures/${picture}`} alt={article.alt}></img>
                                    ))}
                                </figure>}
                        <div className="absolute bottom-2 right-2 w-12 h-12 light-border flex justify-center items-center cursor-pointer" onClick={() => openModal(article)}>
                            <img src="../../index_picto.svg" alt="Cliquez ici" className="w-2/3 h-2/3 hand-tap" />
                            <div className="w-3 h-3 bg-white rounded-full custom-ping absolute left-[26%] top-[12%]"></div>
                        </div>

                    </div>
                    <div className="flex justify-between mt-3 ">
                        <p className="lg:text-2xl sm:text-xl bg-primary-color text-light-color p-3 w-9/12">{article.name}</p>
                        <div className="flex justify-center items-center bg-light-color-dark shadow-inner-shadow lg:w-2/12 sm:flex-1 sm:ml-2">
                            <p className="text-2xl ">{article.price}$</p>
                        </div>
                    </div>
                </div>
                <div className="h-full w-2/12 pl-2">
                    <QuantityButton className={"h-full shadow-outer-shadow bg-light-color-lightened rounded p-2"} row={false} article={article} />
                </div>
            </div>
            {bar === true ? <Bar width="w-full" height="h-2" className="w-full sm:my-2 lg:m-2" /> : ''}

            {showModal && selectedArticle && (
                <ArticleModal article={selectedArticle} onClose={closeModal} />
            )}
        </article>



    )
}

export default Article;