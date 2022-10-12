import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ id, op, correctAnswer }) => {
    // console.log(correctAnswer);

    const { ans, setAns } = useState({})
    const handlerAns = (cr) => {
        console.log(cr);
        if (cr === correctAnswer) {
            toast.success("Correct Answer!",{
                position:"top-center"
            });
            
        }else{
            toast.error("Wrong Answer!",
            {
                position:"top-center"
            });
        }
    }
    return (


        <li className='bg-gray-300 m-4 p-4'>


            <label for={op} onClick={() => handlerAns(op)}>
                <input name={id} id={op} type="radio" />{op}
            </label>
            <ToastContainer />
        </li>


    );
};

export default Options;