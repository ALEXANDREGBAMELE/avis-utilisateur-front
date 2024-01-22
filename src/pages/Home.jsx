import {Header} from '../components/Header';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
            <div className="container flex flex-col h-screen justify-center w-screen m-auto">
                <div className="flex flex-col m-auto">
                    <div className=''>
                        <h1 className='text-center text-5xl mb-5'>Votre avis</h1>
                        <p className='text-green-500 text-3xl'>Pour laisser un commentaire veillez cliquer <span className='text-white'><Link to={'avis-edit'}>ici</Link></span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;