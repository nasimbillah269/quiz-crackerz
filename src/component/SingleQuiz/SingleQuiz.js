import React from 'react';
import Option from '../Option/Option';

const SingleQuiz = ({ quiz }) => {
    const { question, options } = quiz;
    console.log(options);

    return (
        <div className=' lg:w-1/2 mx-auto shadow-2xl mt-12 mb-12 p-2'>
            <p className='w-1/2 mx-auto text-1xl font-bold text-purple-500'>{question}</p>
            {options.map(option => <Option option={option}></Option>)}
        </div>
    );
};

export default SingleQuiz;
