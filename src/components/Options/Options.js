import React from 'react';


const Options = ({ op }) => {
    return (
        <button>
            <input type="radio" />
            <li className='bg-cyan-300 p-2 m-2 text-left'>{op}</li>
        </button>
    );
};

export default Options;