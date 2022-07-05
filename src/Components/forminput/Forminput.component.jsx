import React from 'react';
import './forminput.styles.scss'
export const Forminput = ({ label, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />
            {
                label &&
                <label for={label} className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            }

        </div>
    );
};

