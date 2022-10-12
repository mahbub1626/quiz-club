import React, { useState } from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid';
import Modal from '../Modal/Modal';

const QuizDetails = ({ q }) => {
    // console.log(q);
    const { id, question, correctAnswer, options } = q;
    // console.log(correctAnswer);
    const correct = correctAnswer;


    const handleAnsEye = correct => {
        console.log(correct);
        alert(`${correct}`,{
            position:"top-center"
        })
    }

    return (
        <div className='border border-l-purple-800 mx-auto max-w-xl my-4'>
            <div className='flex bg-purple-800 justify-center items-center'>
                <div className=' p-4 m-2 text-white'>
                    <h2>Quiz: {question}</h2>
                    <h2>Ans: {correctAnswer}</h2>
                </div>
                <div>
                    <p onClick={() => handleAnsEye(correct)} htmlFor="my-modal" className="btn modal-button">

                    <EyeIcon className="h-6 w-6 text-blue-500" />

                    </p>
                    {/* <Modal
                        cr={cr}
                        correct={correct}
                        handleAnsEye={handleAnsEye}
                    ></Modal> */}

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