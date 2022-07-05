import React, { useState } from 'react';
import { signInWithGooglePopup, createUserAuth, signInUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils";
import { Forminput } from '../../forminput/Forminput.component';
import { Signupform } from '../../signup/Signupform.component';
import { Button } from '../../Button/Button.component';
import './sign-in.styles.scss';
const defaultFormValues = {
    email: '',
    password: ''
}

export const Signin = () => {
    const [formValues, setFormValues] = useState(defaultFormValues);
    const { email, password } = formValues;

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserAuth(user)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const clearAllfields = () => {
        setFormValues(defaultFormValues);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signInUserWithEmailAndPassword(email, password);
            console.log(response)
        }
        catch (err) {
            switch (err.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;

                case 'auth/user-not-found':
                    alert('no user associate with this email');
                    break;
                default: 
                console.log(err);
            }
        }
    }

    return (
        <div className='sign-in-container' onSubmit={handleSubmit}>
            <h2>Already have an account?</h2>
            <span> Log in here</span>
            <form onSubmit={handleSubmit}>
                <Forminput
                    label={"email"}
                    onChange={handleChange}
                    value={email}
                    type="email"
                    name="email"
                    required={true}
                />
                <Forminput
                    label={"password"}
                    onChange={handleChange}
                    value={password}
                    type="password"
                    name="password"
                    required={true}
                />

                <div className='buttons-container'>
                    <Button
                        children={"Sign in"}
                        type={'submit'}
                    />
                    <Button
                        buttonType={'google'}
                        onClick={logGoogleUser}
                        children={'Google sign in'}
                        type='button'
                    />
                </div>
            </form>

        </div>
    );
};

