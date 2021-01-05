import React from 'react';
import './Button.css';

const button = (props) => {
    return(
        <div style={{...props.style}} className="Button" onClick={props.clicked}>
            {props.children}
        </div>
    );
};

export default button;