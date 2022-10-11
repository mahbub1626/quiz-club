import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic, handleQuizStart}) => {    
    // console.log(topic);
    const {id,logo, name, total}= topic;
    return (
        <div className='border-solid border-2 border-indigo-600 m-6 '>
            <div>
                <img className='w-100 p-4' src={logo} alt="" />
            </div>
            <div className='flex'>
                <p>{name}</p>
                <p>{total}</p>
                <button className='bg-cyan-500 py-2 px-4 border rounded-lg text-end'>
                <Link to={`/quiz/${id}`}>Quiz</Link>
                </button>
                    
                {/* <button onClick={()=>handleQuizStart(topic)} className='bg-cyan-500'>Start</button> */}
            </div>
        </div>
    );
};

export default Topic;