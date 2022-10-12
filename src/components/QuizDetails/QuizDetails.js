import React from 'react';
import Options from '../Options/Options';
import { EyeIcon } from '@heroicons/react/24/solid';

const QuizDetails = ({ q }) => {
    // console.log(q);
    const { id, question, correctAnswer, options} = q;
    return (
        <div className='border border-l-purple-800 mx-auto max-w-xl my-4'>
            <div className='flex bg-purple-800 justify-center items-center'>
                <div className=' p-4 m-2 text-white'>
                    <h2>Question: {question}</h2>
                </div>
                <div>
                <EyeIcon className="h-6 w-6 text-blue-500" />
                    {/* <h2>{correctAnswer}</h2> */}
                </div>
            </div>
            <ul className='flex flex-col-1'>
                {
                    options.map(op => <Options
                        key={op.id}
                        op={op}
                    ></Options>)
                }
            </ul>

        </div>
    );
};

export default QuizDetails;