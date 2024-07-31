import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navigation } from '../constants/navigation';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (searchInput) {
            navigate(`/search?q=${searchInput}`);
        }
    }, [searchInput]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <header className=' fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
            <div className=' container mx-auto px-6 flex items-center h-full'>
                <Link to={'/'}>
                    <img src={logo} alt='logo' width={120} />
                </Link>
                <nav className='hidden lg:flex items-center ml-8 gap-4'>
                    {navigation.map((nav, index) => {
                        return (
                            <div>
                                <NavLink
                                    key={nav.label}
                                    to={nav.href}
                                    className={({ isActive }) =>
                                        `hover:text-neutral-100 px-2 ${
                                            isActive &&
                                            ' text-neutral-100 font-semibold'
                                        }`
                                    }
                                >
                                    {nav.label}
                                </NavLink>
                            </div>
                        );
                    })}
                </nav>

                <div className='ml-auto flex items-center gap-8'>
                    <form
                        className='flex items-center gap-1'
                        onSubmit={handleSubmit}
                    >
                        <input
                            type='text'
                            placeholder='Search...'
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                            onChange={(e) => setSearchInput(e.target.value)}
                            value={searchInput}
                        />
                        <button>
                            <i className='ri-search-line text-xl'></i>
                        </button>
                    </form>
                    <i className='ri-account-circle-fill text-3xl overflow-hidden cursor-pointer active:text-2xl transition-all'></i>
                </div>
            </div>
        </header>
    );
};

export default Header;
