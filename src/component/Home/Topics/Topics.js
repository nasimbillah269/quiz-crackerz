import React from 'react';
import Topic from '../../Topic/Topic';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    const topics = useLoaderData();
    // const topics = topic.data;
    console.log(topics);
    // console.log(quizs);
    return (
        <div className='grid lg:grid-cols-4 gap-4 mt-12 container mx-auto'>
            {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;