import React from 'react';
import { Signupform } from '../../signup/Signupform.component';
import { Signin } from '../Signin/Signin.component';
import './Sign.styles.scss'

export const SignPage = () => {
    return (
        <div className='authentication-container'>
            <Signin />
            <Signupform />
        </div>
    );
};

