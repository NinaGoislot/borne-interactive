import Nav from '../components/Nav'
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { GlobalContext } from '../App.jsx';
import Panier from '../components/Panier';
import SectionArticle from '../components/SectionArticle';

function Extras() {

    const { articleStore } = useContext(GlobalContext);


    // On acccède aux données des articles via ArticleStore
    const articles = articleStore.articles;

    // Filtrer les articles qui correspondent aux expositions
    const foodArticles = articles.filter(article => article.id.slice(0, 3) === 'FOO');
    const guideArticles = articles.filter(article => article.id.slice(0, 3) === 'GUI');
    const bookArticles = articles.filter(article => article.id.slice(0, 3) === 'BOO');


    return (
        <>
            <Nav page="extras"/>
            <main className='w-full h-full sm:mt-10 sm:px-6 sm:mb-24 lg:mb-96'>
                <div className='flex flex-wrap pb-20 justify-center'>
                    <h1 className='basis-full text-5xl italic font-normal text-center mb-4'>Extras</h1>
                    <div className="relative left-16 basis-48 w-48 h-10 bg-primary-color"></div>
                </div>
                <div className='flex flex-col gap-y-20'>
                    {/* Section guide*/}

                    <SectionArticle articles={guideArticles} sectionName="Laissez-vous guider" sectionIcon="faUser" />

                    {/* Section repas*/}

                    <SectionArticle articles={foodArticles} sectionName="Une petite faim" sectionIcon="faMugHot" alignLeft={false} />

                    {/* Section boutique*/}

                    <SectionArticle articles={bookArticles} sectionName="Notre boutique" sectionIcon="faGift" />
                </div>

                 <Panier />

            </main>
        </>
    )
}
export default observer(Extras);