import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src="./images/logo.jpg" className="logo" alt=""/>

            <ul>
                <li>צור קשר</li>
                <li>עלינו</li>
                <li className="active">פרויקטים</li>
            </ul>
        </div>
    );
};

export default Navbar;
