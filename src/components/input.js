import React from 'react'
import './component.css';

function Input1(props) {
    return (
        <div>
            <div style={{ border: `2px solid ${props.errorMessage ? 'red':'lightgray'}`, borderRadius: '0.25rem' }}>
                <input className={` ${props.className} input1 ${props.errormessage ? 'input-error' : ''}`}
                    {...props}
                />
            </div>
            {props.errorMessage && <span className="error-message">
                {props.errorMessage}
            </span>}
        </div>
    )
};

function Lable(props) {
    return (
        <label className={props.required  ? 'required' : ''} style={{ width: '150px' }}>{props.title}</label>
    )
};


export {
    Input1,
    Lable,
}