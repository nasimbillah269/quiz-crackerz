import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';


const Home = () => {
    const topics = useLoaderData();
    // const topics = topic.data;
    console.log(topics);
    // console.log(quizs);
    return (
        <div>
            <Header></Header>
            <div className='lg:grid lg:w-6/12 lg:grid-cols-2 lg:gap-12 mt-12 mb-12 container mx-auto'>
                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>

        </div>
    );
};

export default Home;