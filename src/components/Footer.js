import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=' mt-40 bg-black'>
            <div className='mx-auto w-full max-w-screen-2xl'>
                <div className='grid grid-cols-2 gap-8 px-8 py-6 lg:py-8 md:grid-cols-3'>
                    <div>
                        <h2 className='mb-6 text-base font-semibold text-neutral-100 '>
                            About us
                        </h2>
                        <p className='text-gray-500 dark:text-gray-400 font-medium text-sm leading-7 '>
                            A user-friendly movie discovery platform that offers
                            personalized recommendations, detailed movie
                            information, and the latest reviews. Explore new
                            releases, find hidden gems, and create watchlists
                            effortlessly with{' '}
                            <span className='text-gray-300'>Movieo</span>
                        </p>
                    </div>
                    <div className='lg:ml-20'>
                        <h2 className='mb-6  text-base font-semibold text-neutral-100 '>
                            Features
                        </h2>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium text-sm list-disc pl-4'>
                            <li className='mb-4'>
                                <a href='/' className='hover:underline'>
                                    Home
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='/' className='hover:underline'>
                                    TV Shows
                                </a>
                            </li>
                            <li className='mb-4'>
                                <a href='/' className='hover:underline'>
                                    Movies
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='mb-6  text-base font-semibold text-neutral-100 '>
                            Support
                        </h2>
                        <ul className='text-gray-500 dark:text-gray-400 font-medium text-sm '>
                            <li className='mb-4'>
                                <p>
                                    For any questions or feedback requiring
                                    support, please contact our Fanpage and
                                    Instagram.
                                </p>
                            </li>
                            <li className='mb-4 flex gap-2'>
                                <i className='ri-facebook-circle-fill text-xl'></i>
                                <i className='ri-instagram-fill text-xl'></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='px-4 py-6 bg-gray-900 md:flex md:items-center md:justify-between'>
                    <span className='text-sm text-gray-300 sm:text-center'>
                        © 2024 <a href='https://flowbite.com/'>Movieo</a>. All
                        Rights Reserved.
                    </span>
                    <div className='flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse'>
                        <a
                            href='https://github.com/DungLe2983'
                            target='blank'
                            className='text-gray-400 hover:text-white'
                        >
                            <i className='ri-github-fill'></i>
                            <span className='sr-only'>GitHub</span>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/quocdungle2983/'
                            target='blank'
                            className='text-gray-400 hover:text-white'
                        >
                            <i className='ri-linkedin-box-line'></i>
                            <span className='sr-only'>LinkedIn</span>
                        </a>
                        <a
                            href='https://www.facebook.com/quocdung.le.31945'
                            target='blank'
                            className='text-gray-400 hover:text-white'
                        >
                            <i className='ri-facebook-circle-fill '></i>
                            <span className='sr-only'>Facebook account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
