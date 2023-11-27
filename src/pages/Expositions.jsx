import Article from '../components/Article';
import React, { useContext, useState } from 'react';
import Nav from '../components/Nav'
import { GlobalContext } from '../App.jsx';
import { observer } from 'mobx-react-lite';
import Panier from '../components/Panier';
import ArticleModal from '../components/ArticleModal';

function Expositions() {

    const { articleStore } = useContext(GlobalContext);

    // On acccède aux données des articles via ArticleStore
    const articles = articleStore.articles;

    // Filtrer les articles qui correspondent aux expositions
    const expositionArticles = articles.filter(article => article.id.slice(0, 3) === 'EXP');

    // Gestion de la pop la pop-up
    const [showModal, setShowModal] = useState(null);

    const handleShowModal = (articleModal) => {
        setShowModal(articleModal);
    };

    const handleCloseModal = () => {
        setShowModal(null);
    };


    return (
        <>
            <Nav page="expositions"/>
            <main className='w-full sm:mb-24 lg:mb-96 sm:mt-10 sm:px-6'>
                <div className='flex flex-wrap pb-20 justify-center'>
                    <h1 className='basis-full text-5xl italic font-normal text-center mb-4'>Nos expositions</h1>
                    <div className="relative right-16 basis-48 w-48 h-10 bg-primary-color"></div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {expositionArticles.map(article => (
                        <Article key={article.id} article={article}/>
                    ))}
                </div>
                <Panier />
            </main>

            {/* Affichage de la pop up Article */}
            {showModal && (
                <ArticleModal
                    article={handleShowModal}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
}
export default observer(Expositions);