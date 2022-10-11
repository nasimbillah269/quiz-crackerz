import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'

const SingleQuiz = ({ quiz }) => {
    const { question, options } = quiz;
    console.log(options);

    return (
        <div className=' lg:w-1/2 mx-auto shadow-2xl mt-12 mb-12 p-2'>
            <div className='flex justify-end mr-12'>
                <span>< EyeIcon className="h-6 w-6  text-red-600 ml-2" /></span>
            </div>
            <p className='w-1/2 mx-auto text-1xl font-bold text-purple-500'>{question}</p>
            {options.map(option => <Option option={option}></Option>)}
        </div>
    );
};

export default SingleQuiz;
