import React from 'react';
import Topic from '../../Topic/Topic';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className='lg:grid lg:w-6/12 lg:grid-cols-2 gap-12 mt-12 container mx-auto'>
            {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;