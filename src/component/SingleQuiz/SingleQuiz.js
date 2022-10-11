import React from 'react';
import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({ quiz, index }) => {
    const { question, options, correctAnswer } = quiz;
    console.log(question.indexOf());
    const optionClick = option => {
        if (correctAnswer === option) {
            // alert('correctAnswer')
            toast("Correct Answer");
        }
        else {
            // alert('worng answer')
            toast("Worng Answer");
        }
        // console.log('option clicked', option);
    }

    // console.log(options);
    const handleCoorrectAnswer = () => {
        // alert(correctAnswer)
        toast(correctAnswer);
    }

    return (
        <div className=' lg:w-1/2 mx-auto shadow-2xl mt-12 mb-12 p-2'>
            <div className='flex justify-end mr-12'>
                <span>< EyeIcon onClick={handleCoorrectAnswer} className="h-6 w-6 cursor-pointer hover:text-gray-500 text-gray-700 ml-2" /></span>
            </div>
            <p className='w-1/2 mx-auto text-1xl font-bold text-purple-500'>quiz: {index + 1} {question}</p>
            {options.map(option => <Option option={option} optionClick={optionClick}></Option>)}
            <ToastContainer />
        </div>
    );
};

export default SingleQuiz;
