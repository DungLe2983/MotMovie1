import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const ExplorePage = () => {
    const param = useParams();
    const [pageNo, setPageNo] = useState(1);
    const [data, setData] = useState([]);
    const [totalPageNo, setTotalPageNo] = useState(0);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/discover/${param.explore}`, {
                params: {
                    page: pageNo,
                },
            });
            setData((preve) => {
                return [...preve, ...response.data.results];
            });
            setTotalPageNo(response.data.total_pages);
        } catch (error) {
            console.log(error);
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setPageNo((preve) => preve + 1);
        }
    };

    useEffect(() => {
        fetchData();
    }, [pageNo]);

    useEffect(() => {
        setPageNo(1);
        setData([]);
        fetchData();
    }, [param.explore]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='py-16'>
            <div className='container mx-auto'>
                <h3 className='capitalize text-lg lg:text-2xl font-semibold my-6 px-6'>
                    Popular {param.explore} show
                </h3>

                <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start px-0 lg:px-6'>
                    {data.map((exploreData, index) => {
                        return (
                            <Card
                                data={exploreData}
                                key={exploreData.id + 'exploreSEction'}
                                media_type={param.explore}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ExplorePage;
