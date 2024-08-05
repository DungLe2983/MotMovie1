import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import useFetchDetails from '../hooks/useFetchDetails';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Divider from '../components/Divider';
import HorizontalScollCard from '../components/HorizontalScrollCard'

const DetailsPage = () => {
    const params = useParams();
    const imageURL = useSelector((state) => state.movieData.imageURL);
    const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
    const { data: actorData } = useFetchDetails(
        `/${params?.explore}/${params?.id}/credits`
    );
    const { data: similarData } = useFetch(
        `/${params?.explore}/${params?.id}/similar`
    );
    const { data: recommendationData } = useFetch(
        `/${params?.explore}/${params?.id}/recommendations`
    );
    const [playVideo, setPlayVideo] = useState(false);
    const [playVideoId, setPlayVideoId] = useState('');

    console.log('actor data ===', actorData);

    const duration = (data?.runtime / 60)?.toFixed(1)?.split('.');
    const writer = actorData?.crew
        ?.filter((el) => el?.job === 'Writer')
        ?.map((el) => el?.name)
        ?.join(', ');

    return (
        <div>
            <div className='w-full h-[300px] relative hidden lg:block'>
                <div className='w-full h-full'>
                    <img
                        src={imageURL + data?.backdrop_path}
                        className='h-full w-full object-cover'
                        alt='MovieImage'
                    />
                </div>
                <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
            </div>

            <div className='container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10 '>
                <div className='relative mx-auto  lg:mx-3 w-fit min-w-60'>
                    <img
                        src={imageURL + data?.poster_path}
                        className='h-80 w-60 object-cover rounded'
                        alt='Img'
                    />
                    <button className='mt-1 w-full py-2 px-4 text-center bg-white text-black hover:text-white rounded font-bold text-lg hover:bg-gradient-to-l from-red-700 to-orange-500 hover:scale-105 transition-all'>
                        Play Now
                    </button>
                </div>

                <div className=''>
                    <h2 className='text-2xl lg:text-4xl font-bold text-white '>
                        {data?.title || data?.name}
                    </h2>
                    <p className='text-neutral-400 '>{data?.tagline}</p>

                    <Divider />

                    <div className='flex items-center gap-3'>
                        <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
                        <span className='hidden md:block'>|</span>
                        <p>View : {Number(data?.vote_count)}</p>
                        <span className='hidden md:block'>|</span>
                        <p>
                            Duration : {duration[0]}h {duration[1]}m
                        </p>
                    </div>

                    <Divider />

                    <div>
                        <h3 className='text-xl font-bold text-white my-2 md:mt-6'>
                            Overview
                        </h3>
                        <p>{data?.overview}</p>
                        <Divider />

                        <div className='flex md:flex-row flex-col md:items-center gap-3 my-3 md:text-center '>
                            <p>Staus : {data?.status}</p>
                            <span className='hidden md:block'>|</span>
                            <p>
                                Release Date :{' '}
                                {moment(data?.release_date).format(
                                    'MMMM Do YYYY'
                                )}
                            </p>
                            <span className='hidden md:block'>|</span>
                            <p>Revenue : {Number(data?.revenue)}</p>
                        </div>
                        <Divider />
                    </div>

                    <div>
                        <p>
                            <span className='text-white'>Director</span> :{' '}
                            {actorData?.crew[0]?.name}
                        </p>
                        <Divider />
                        <p>
                            <span className='text-white'>
                                Writer : {writer}
                            </span>
                        </p>
                    </div>

                    <Divider />
                </div>
            </div>

            <h2 className='font-bold text-2xl lg:text-3xl  px-3 md:px-6 my-6'>
                {' '}
                Cast :
            </h2>
            <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-4 px-3 md:px-6 my-4'>
                {actorData?.cast
                    ?.filter((el) => el?.profile_path)
                    .map((starCast, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <img
                                        src={imageURL + starCast?.profile_path}
                                        className='w-24 h-24 object-cover rounded-full'
                                        alt='Img'
                                    />
                                </div>
                                <p className='font-bold text-center text-sm text-neutral-400'>
                                    {starCast?.name}
                                </p>
                            </div>
                        );
                    })}
            </div>

            <div>
                <HorizontalScollCard
                    data={similarData}
                    heading={'Similar ' + params?.explore}
                    media_type={params?.explore}
                />
                <HorizontalScollCard
                    data={recommendationData}
                    heading={'Recommendation ' + params?.explore}
                    media_type={params?.explore}
                />
            </div>
        </div>
    );
};

export default DetailsPage;
