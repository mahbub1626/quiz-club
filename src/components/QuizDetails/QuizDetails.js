import React from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid';
import Modal from '../Modal/Modal';

const QuizDetails = ({ q }) => {
    // console.log(q);
    const { id, question, correctAnswer, options } = q;

    const handleCurrectAnswere = (correctAnswer) => {
        
    }

    return (
        <div className='border border-l-purple-800 mx-auto max-w-xl my-4'>
            <div className='flex bg-purple-800 justify-center items-center'>
                <div className=' p-4 m-2 text-white'>
                    <h2>Question: {question}</h2>
                    {/* <h2>Quiz  {id}: {ques}</h2> */}
                </div>
                <div>
                    <button onClick={() => handleCurrectAnswere(correctAnswer)}><EyeIcon className="h-6 w-6 text-blue-500" /></button>
                    {/* <h2>{correctAnswer}</h2> */}
                    <Modal></Modal>
                </div>
            </div>
            <ul className=''>
                {
                    options.map(op => <Options
                        key={op.id}
                        op={op}
                        id={id}
                        correctAnswer={correctAnswer}

                    ></Options>)
                }
            </ul>

        </div>
    );
};

export default QuizDetails;