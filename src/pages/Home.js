import React from 'react';
import Banner from '../components/Banner';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

const Home = () => {
    const trendingMoviesData = useSelector(
        (state) => state.movieData.bannerData
    );
    return (
        <div>
            <Banner />
            <div className=' container mx-auto px-6'>
              <h2>Treding Movies</h2>
              {trendingMoviesData.map((data)=>{
                return(
                  <Card key={data.id} data={data}/>
                )
              })}
            </div>
        </div>
    );
};

export default Home;
