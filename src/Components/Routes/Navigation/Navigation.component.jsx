import React, {useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import  "./navigation.styles.scss";
import {ReactComponent as CrownLogo} from '../../../assets/crown.svg'
import { UserContext } from '../../../contexts/User.context';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import { CartIcon } from '../../CartIcon/CartIcon.component';
import { CartDropdown } from '../../cartDropdown/CartDropdown.component';
import { CartContext } from '../../../contexts/CartDrop.context';

export const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const {showCart, setShowCart} = useContext(CartContext);

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div className='logo'>
                        <CrownLogo/>
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link to="shop" className='nav-link' >Shop</Link>
                    {
                        currentUser? (
                            <Link to="sign" className='nav-link' onClick={signOutUser}>Sign Out</Link>
                        )
                        :
                        (
                            <Link to="sign" className='nav-link'>SignIn</Link>
                        )
                    }
                    <CartIcon/>
                </div>
               {
                showCart && <CartDropdown />
               }
            </div>
            <Outlet />
        </>
    )
}
