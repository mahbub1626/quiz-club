import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/solid';

const Topic = ({ topic, handleQuizStart }) => {
    // console.log(topic);
    const { id, logo, name, total } = topic;
    return (
        <div className="card w-70 bg-base-100 shadow-xl image-full">
            <figure><img className='bg-gray-300' src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div className="card-actions justify-between">
                    <button className="btn btn-outline btn-accent ">Q-{total}</button>
                    <button className="btn btn-outline btn-secondary btn-square loading px-2">
                        <BookOpenIcon className="h-6 w-6 text-blue-500" />
                    </button>

                </div>

                <Link className="card-actions" to={`/quiz/${id}`}><button className='btn w-full btn-outline btn-secondary bg-zinc-900'>Start Quiz</button></Link>

            </div>
        </div>
    );
};

export default Topic;