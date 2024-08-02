import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = ({ data, trending, index, media_type }) => {
    const imageURL = useSelector((state) => state.movieData.imageURL);
    return (
        <Link
            to={'/' + data.media_type + '/' + data.id}
            className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 transition-all'
        >
            <img src={imageURL + data?.poster_path} alt='MovieImg' />
            <div className=' absolute top-2 '>
                {trending && (
                    <div className='py-1 px-4 bg-black/40 rounded-r-full backdrop-blur-3xl overflow-hidden'>
                        #{index} Trending
                    </div>
                )}
            </div>
            <div className='absolute bottom-0 h-14 w-full backdrop-blur-3xl bg-black/60 p-2'>
                <h2 className='font-bold text-ellipsis line-clamp-1 text-base'>
                    {data?.title || data?.name}
                </h2>
                <div className='text-gray-400 text-sm flex justify-between items-baseline'>
                    <p>
                        {moment(
                            data.release_date || data.first_air_date
                        ).format('MMMM Do YYYY')}
                    </p>
                    <p className='text-xs'>
                        Rate: {Number(data.vote_average).toFixed(1)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
