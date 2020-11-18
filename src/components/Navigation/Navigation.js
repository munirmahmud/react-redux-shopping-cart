import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Navigation.styles.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/">
                            <img src="/images/logo.png" alt="tuesy"/>
                        </Link>
                    </div>

                    <div className="nav__left">
                        <div className="nav__cart-icon">
                            <AiOutlineShoppingCart />
                            <span className="nav__cart-amout">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
