import React from 'react';
import Options from '../Options/Options';

const QuizDetails = ({ q }) => {
    // console.log(q);
    const { id, question, correctAnswer, options} = q;
    return (
        <div className='border border-l-purple-800 mx-auto max-w-xl my-4'>
            <div>
                <div className='bg-purple-800 p-4 m-2 text-white'>
                    <h2>Question: {question}</h2>
                </div>
                <div>
                    {/* <h2>{correctAnswer}</h2> */}
                </div>
            </div>
            <ul className=''>
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