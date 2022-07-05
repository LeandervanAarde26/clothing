import React from 'react';
import './button.styles.scss'; 

/* 
    Three types of buttons
    default
    inverted 
    google sign in button
    Lets control it with a class. 
*/
const buttonTypesClasses = {
    google: 'google-sign-in',
    inverted: 'inverted'

}
export const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${buttonTypesClasses[buttonType]}`} {...otherProps}>
                {children}
        </button>
    );
};

