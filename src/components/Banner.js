import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Banner = () => {
    const bannerData = useSelector((state) => state.movieData.bannerData);
    const imageURL = useSelector((state) => state.movieData.imageURL);
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        if (currentImage < bannerData.length - 1) {
            setCurrentImage((preve) => preve + 1);
        }
    };

    const handlePrevious = () => {
        if (currentImage > 0) {
            setCurrentImage((preve) => preve - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage < bannerData.length - 1) {
                handleNext();
            } else {
                setCurrentImage(0);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [bannerData, imageURL, currentImage]);
    return (
        <section className='w-full h-full'>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
                {bannerData.map((data, index) => {
                    return (
                        <div
                            key={data.id}
                            className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all'
                            style={{
                                transform: `translateX(-${
                                    currentImage * 100
                                }%)`,
                            }}
                        >
                            <div className='h-full w-full'>
                                <img
                                    src={imageURL + data.backdrop_path}
                                    alt='imgBanner'
                                    className='h-full w-full object-cover'
                                />
                            </div>
                            <div className=' absolute top-0 bg-gradient-to-t from-neutral-900 to-transparent h-full w-full ' />
                            {/* button next and previous Image */}
                            <div className='absolute top-0 h-full w-full  items-center justify-between px-4 hidden group-hover:lg:flex '>
                                <button onClick={handlePrevious}>
                                    <i className='ri-arrow-left-s-line text-xl lg:text-4xl text-neutral-500 hover:text-neutral-200 '></i>
                                </button>
                                <button onClick={handleNext}>
                                    <i className='ri-arrow-right-s-line text-xl lg:text-4xl text-neutral-500 hover:text-neutral-200'></i>
                                </button>
                            </div>
                            {/* button next and previous Image */}
                            <div className='container mx-auto  '>
                                <div className=' w-full absolute bottom-0 max-w-md px-6'>
                                    <h2 className='font-bold text-2xl mb-0 lg:mb-4 lg:text-4xl text-white drop-shadow-2xl'>
                                        {data?.title || data?.name}
                                    </h2>
                                    <p className='text-ellipsis line-clamp-3 my-2'>
                                        {data.overview}
                                    </p>
                                    <div className='flex items-center gap-4'>
                                        <p>
                                            Rating :{' '}
                                            {Number(data.vote_average).toFixed(
                                                1
                                            )}{' '}
                                            +{' '}
                                        </p>
                                        <span>|</span>
                                        <p>
                                            View :{' '}
                                            {Number(data.popularity).toFixed(0)}
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleNext}
                                        className='px-4 py-2 text-black hover:text-white font-bold rounded mt-4 bg-white hover:bg-gradient-to-l hover:scale-105 duration-200 from-red-700 to-orange-500 shadow-md transition-all'
                                    >
                                        Play Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Banner;
