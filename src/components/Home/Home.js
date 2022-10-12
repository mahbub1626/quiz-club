import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import Banner from '../../asset/header-banner.png'

const Home = () => {
    const data = useLoaderData()
    const quizTopics = data.data
    // console.log(quizTopics);
    const [quiz, setQuiz] = useState([])
    console.log(quiz);

    const handleQuizStart = (topic) => {
        const newData = topic;
        // console.log(to)
        setQuiz(newData);
    }
    return (
        <div className='container m-auto'>
            <div className='w-100'>
                <img className='w-full h-112' src={Banner} alt="header banner" />
            </div>
            <h2 className='text-4xl font-bold text-rose-500 mt-4 '>Select a topic to start</h2>

            <div className='grid md:grid-cols-3 gap-6 my-8'>
                {
                    quizTopics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                        handleQuizStart={handleQuizStart}
                    ></Topic>)
                }
            </div>

        </div>
    );
};

export default Home;