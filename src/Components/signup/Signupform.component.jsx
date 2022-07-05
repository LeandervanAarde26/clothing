import React from 'react';
import { useState, useRef } from 'react';
import { createAuthuserWithEmailAndPassword, createUserAuth } from '../../utils/firebase/firebase.utils';
import './signupform.styles.scss';
import { Forminput } from '../forminput/Forminput.component';
import { Button } from '../Button/Button.component';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirm: '',
}

export const Signupform = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirm } = formFields;

    const handleChange = (e) => {
        const { name, value } = e.target;
        //This is way easier than the last way that we learned, use in future. 
        setFormFields({ ...formFields, [name]: value });
    };
    const clearFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirm) {
            alert('passwords do not match')
            return;
        }

        try {
            const { user } = await createAuthuserWithEmailAndPassword(
                email,
                password
            );
            await createUserAuth(user, { displayName });
            clearFields();

            console.log(user);
        }
        catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert("Email is already in use");
            } else {
                console.log(err);
            }
        }
    }

    return (
        <div className="sign-up-container">
            <h2> I do not have an account </h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} >
                <Forminput
                    label={"Display Name"}
                    onChange={handleChange}
                    value={displayName}
                    type="text"
                    name="displayName"
                    required={true}
                />

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
                <Forminput
                    label={"confirm"}
                    onChange={handleChange}
                    value={confirm}
                    type="password"
                    name="confirm"
                    required={true}
                />

                <Button
                    type='submit'
                    children={"Sign up"}
                />
            </form>
        </div>
    );
};

