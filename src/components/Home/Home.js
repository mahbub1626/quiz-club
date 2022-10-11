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
                <img className='w-100 h-112' src={Banner} alt="header banner" />
            </div>
            <h2>Select a topic and start: {quizTopics.length}</h2>

            <div className='grid grid-cols-4'>
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