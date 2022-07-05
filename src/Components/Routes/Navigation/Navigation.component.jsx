import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./navigation.styles.scss";
import {ReactComponent as CrownLogo} from '../../../assets/crown.svg'

export const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div className='logo'>
                        <CrownLogo/>
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link to="/shop" className='nav-link' >Shop</Link>
                    <Link to="sign" className='nav-link'>SignIn</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}
