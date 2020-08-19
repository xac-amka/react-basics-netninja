import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

const Navbar = (props) => {
    // console.log(props);
    // setTimeout(()=> {
    //     props.history.push('/about');
    // }, 3000)
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to="/" className="left brand-logo">SMILE <i className="material-icons">add</i></Link>
                <ul className="right">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);