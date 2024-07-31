import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
    const fetchTredingData = async () => {
        try {
            const respone = await axios.get('/trending/all/week');
            console.log('Data===', respone);
        } catch (error) {
            console.log('Failed to fetch', error);
        }
    };
    useEffect(() => {
        fetchTredingData();
    }, []);
    return (
        <main className='pb-14 lg:pb-0'>
            <Header />
            <div className='pt-16'>
                <Outlet />
            </div>
            <Footer />
            <MobileNavigation />
        </main>
    );
}

export default App;
