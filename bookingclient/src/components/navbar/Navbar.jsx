import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./Navbar.css"

const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);
    // console.log(user.details.username);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className='navbar' >
            <div className="navContainer">
                <Link to="/" style={{ color: 'inherit', textDecoration: "none" }} >
                    <span className="logo">VikiBooking</span>
                </Link>
                {user ? (<div className="navItems">
                    <span className="logo">{user.details.username}</span>
                    <button className="navButton" onClick={handleLogout}>Logout</button>
                </div>) :
                    (<div className="navItems">
                        <Link to="/register">
                            <button className="navButton">Register</button>
                        </Link>
                        <Link to="/login">
                            <button className="navButton">Login</button>
                        </Link>
                    </div>)}
            </div>
        </div>
    )
}

export default Navbar