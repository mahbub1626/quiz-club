import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const data = useLoaderData();
    const quiz = data.data;
    const { name, questions } = quiz;
    const quizQ = questions;
    // console.log(quizQ);
    return (
        <div className=''>
            <h2 className='p-6 text-3xl font-bold text-purple-700'>{name}</h2>
            <div>
            {
                quizQ.map(q => <QuizDetails
                key={q.id}
                q={q}
                ></QuizDetails>)
            }
            </div>
        </div>
    );
};

export default Quiz;