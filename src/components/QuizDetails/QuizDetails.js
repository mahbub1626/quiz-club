import React, { useState } from 'react';
import Options from '../Options/Options';

import Modal from '../Modal/Modal';

const QuizDetails = ({ q }) => {
    // console.log(q);
    const { id, question, correctAnswer, options } = q;
    // console.log(correctAnswer);
    const correct = correctAnswer;

    const {cr, setCr} = useState()

    const handleAnsEye = correct => {
        // console.log(correct)
        setCr(correct);
        alert({correct})
    }

    return (
        <div className='border border-l-purple-800 mx-auto max-w-xl my-4'>
            <div className='flex bg-purple-800 justify-center items-center'>
                <div className=' p-4 m-2 text-white'>
                    <h2>Quiz: {question}</h2>
                    <h2>Ans: {correctAnswer}</h2>
                </div>
                <div>

                    <Modal
                        cr={cr}
                        correct={correct}
                        handleAnsEye={handleAnsEye}
                    ></Modal>

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