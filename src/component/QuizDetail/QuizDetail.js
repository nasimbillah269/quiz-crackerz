import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizDetail = () => {
    const { data } = useLoaderData();
    console.log(data);
    return (
        <div >
            {
                <p className='text-2xl font-bold text-purple-600 mt-12'>Quiz of {data.name}</p>
            }
            <div >
                {
                    data.questions.map(quiz => <SingleQuiz key={quiz.id} quiz={quiz}></SingleQuiz>)

                }
            </div>
        </div>
    );
};

export default QuizDetail;