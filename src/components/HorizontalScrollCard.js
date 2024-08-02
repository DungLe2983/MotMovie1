import React, { useRef } from 'react';
import Card from './Card';

const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
    const contaierRef = useRef();

    const handleNext = () => {
        contaierRef.current.scrollLeft += 300;
    };
    const handlePrevious = () => {
        contaierRef.current.scrollLeft -= 300;
    };
    return (
        <div className=' container mx-auto px-6 my-16'>
            <h2 className='text-xl lg:text-2xl font-semibold mb-4'>
                {heading}
            </h2>
            <div className=' relative'>
                <div
                    ref={contaierRef}
                    className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none'
                >
                    {data.map((data, index) => {
                        return (
                            <Card
                                key={data.id + 'heading' + index}
                                data={data}
                                index={index + 1}
                                trending={trending}
                            />
                        );
                    })}
                </div>

                <div>
                    {/* button next and previous Image */}
                    <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center px-4'>
                        <button
                            onClick={handlePrevious}
                            className=' p-1 text-black rounded-full -ml-2 z-10 hover:scale-125 transition-all'
                        >
                            <i className='ri-arrow-left-s-line text-xl lg:text-4xl font-bold text-neutral-200 hover:text-white '></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className='p-1 text-black rounded-full -mr-2 z-10 hover:scale-125 transition-all'
                        >
                            <i className='ri-arrow-right-s-line text-xl lg:text-4xl text-neutral-200 hover:text-white '></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScrollCard;
