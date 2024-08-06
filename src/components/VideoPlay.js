import React from 'react'
import useFetchDetails from '../hooks/useFetchDetails';

const VideoPlay = ({ data, close, media_type }) => {
    const { data: videoData } = useFetchDetails(
        `/${media_type}/${data?.id}/videos`
    );
    return (
        <section
            onClick={close}
            className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'
        >
            <div className='bg-black w-full  max-h-[80vh] max-w-screen-lg aspect-video rounded  relative'>


                <iframe
                    src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
                    className='w-full h-full'
                    title='Trailer Video'
                />
            </div>
        </section>
    );
};

export default VideoPlay
