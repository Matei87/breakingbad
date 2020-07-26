import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <img src={require('../../img/logo.png')} alt="logo" />
                        <p>All the characters from the tv show</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
