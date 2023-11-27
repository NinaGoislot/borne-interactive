import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Bar from '../components/Bar';

function Home() {


    const navigate = useNavigate();

    const toExpositions = () => {
        navigate('/Expositions');
    };

    const toExtras = () => {
        navigate('/Extras');
    };

    return (
        <>
            <main className='sm:py-20 sm:px-6  sm:h-screen'>
                <div className="flex flex-wrap lg:h-screen sm:h-full lg:w-screen bg-light-color">
                    <div className="flex sm:flex-col" onClick={toExpositions}>
                        <img className="lg:fixed lg:right-96 lg:top-56 lg:w-6/12 lg:h-auto sm:w-[156px] sm:h-[150px] border-4 border-dark-color shadow-outer-shadow" src="../../expos.jpg" alt="" />
                        <div className='lg:fixed lg:top-[16%] lg:right-[22.5%] lg:text-right sm:text-6xl lg:text-8xl'>
                            <div className='sm:hidden lg:block'>
                                <h1>Achetez</h1>
                                <h1>vos</h1>
                                <h1>billets</h1>
                            </div>
                            <h1 className='sm:block lg:hidden py-6'>Achetez vos billets</h1>
                        </div>
                    </div>

                    <div className="sm:hidden lg:block fixed top-[50%] left-[43%] w-36 h-2 bg-dark-color"></div>

                    <Bar width="w-4/5" height="h-full" className="w-full sm:flex lg:hidden h-2" />

                    <div className="flex sm:flex-col sm:items-end lg:bottom-1/3 lg:right-20 lg:w-screen" onClick={toExtras}>
                        <img className="lg:fixed lg:right-28 lg:bottom-1/4 lg:w-7/12 lg:h-auto sm:w-[157px] sm:h-[72px] border-dark-color shadow-outer-shadow border-4" src="../../extras.jpg" alt="" />
                        <div className='lg:fixed lg:left-[19%] lg:bottom-[20%] sm:text-6xl lg:text-8xl'>
                            <div className='sm:hidden lg:block'>
                                <h1>Visitez</h1>
                                <h1>avec extras</h1>
                            </div>
                            <h1 className='sm:block lg:hidden flex text-end py-6'>Visitez avec extras</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default observer(Home);