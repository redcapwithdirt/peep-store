import { Fragment } from 'react';
import './Navigation.scss';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const Navigation = () => {
    return (
        <Fragment>
            
            <div className='navigation'>
                <NavLink className='logo-container' to='/'>
                    <img src={Logo} alt='logo' />
                </NavLink>
                <div className='nav-links'>

                    <NavLink
                        className='nav-link'
                        to="/"
                        activeClassName="active"
                    >
                        home
                    </NavLink>

                    <NavLink
                        className='nav-link'
                        to="/store"
                        activeClassName="active"
                    >
                        store
                    </NavLink>

                    <NavLink
                        className='nav-link'
                        to="/inspiration"
                        activeClassName="active"
                    >
                        inspiration
                    </NavLink>
                </div>

                <div className='login-container'>
                    <NavLink
                        className='login-text'
                        to='/login'
                    >
                        login
                    </NavLink>
                </div>

            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;