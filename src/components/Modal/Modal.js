import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
const Modal = ({id, correctAnswer, handleCurrectAnswere}) => {

    return (
        <div>

            <label onClick={() => handleCurrectAnswere(correctAnswer)} htmlFor="my-modal" className="btn modal-button">

                    <EyeIcon className="h-6 w-6 text-blue-500" />

            </label>


            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Correct Answer!</h3>
                    <p className="py-4">{correctAnswer}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;