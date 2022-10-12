import React from 'react';


const Options = ({ key, op }) => {

    return (


            <li>
                <input  id={key} type="radio" />
            <label for={key}>{op}</label>
            {/* <li className='bg-cyan-300 p-2 m-2 text-left'></li> */}
            {/* <input type="radio" id="html" name="fav_language" value="HTML">
            <label for="html">{op}</label><br></br> */}
            </li>

    
    );
};

export default Options;