import React from 'react';

const Blog = () => {
    return (
        <div className='container pb-96 m-auto'>
            <div className=''>
                <h2 className='text-2xl text-center p-4'>What is the purpose os React Router</h2>
                <p>React Router is a roat of url. It is work without reload main page but allows changing the browser URL and keeps the UI.</p>
            </div>
            <div>
                <h2 className='text-2xl text-center p-4'>How Does Contax API work?</h2>
                <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
            </div>
            <div>
                <h2 className='text-2xl text-center p-4'>useRef Hook</h2>
                <p>The useRef Hook allows you to persist values between renders.
                    It can be used to store a mutable value that does not cause a re-render when updated.
                    It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;