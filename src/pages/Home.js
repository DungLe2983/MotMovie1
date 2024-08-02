import React from 'react';
import Banner from '../components/Banner';
import { useSelector } from 'react-redux';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const trendingMoviesData = useSelector(
        (state) => state.movieData.bannerData
    );
    const { data: nowPlayingData } = useFetch('/movie/now_playing');
    const { data: topRatedData } = useFetch('/movie/top_rated');
    const { data: popularTvShowData } = useFetch('/tv/popular');

    return (
        <div>
            <Banner />
            <HorizontalScrollCard
                data={trendingMoviesData}
                heading={'Treding Movies'}
                trending={true}
            />
            <HorizontalScrollCard
                data={nowPlayingData}
                heading={'Now Playing Movies'}
            />
            <HorizontalScrollCard
                data={topRatedData}
                heading={'Top Rated Movies'}
            />
            <HorizontalScrollCard
                data={popularTvShowData}
                heading={'Popular TV Shows'}
            />
        </div>
    );
};

export default Home;
