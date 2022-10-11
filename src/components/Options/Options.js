import React from 'react';


const Options = ({op}) => {
    return (
        
        
               <div>
                <p>{op.id}</p>
                <li className='bg-cyan-300 p-2 m-2 text-left'><input type="checkbox" />{op}</li>
               </div>
            
        
    );
};

export default Options;