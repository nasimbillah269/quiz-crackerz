import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const [topics, setTopics] = useState([])
    console.log(topics);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {

                const topicsDataLoad = data.data.data;
                const topicsData = topicsDataLoad.map(topic => {
                    const topicData = {
                        name: topic.name,
                        total: topic.total
                    }
                    return topicData;

                })
                console.log(topicsDataLoad);
                setTopics(topicsData)
            })
    }, [])
    return (

        <div className='container w-1/2 mt-12 bg-gray-300 p-12 shadow-2xl rounded-xl mx-auto'>

            <LineChart width={500} height={400} data={topics}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>

        </div>

    );
};

export default Statistics;