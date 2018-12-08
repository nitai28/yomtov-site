import React from 'react';
import Navbar from './Navber/Navbar'

const Header = () => {
    return (
        <div>
            <Navbar/>
            <div className="header-content">
                <div className="head">
                    <h1 className="main-headline">יום טוב שביט </h1>
                    <p className="headline-span">הנדסה אזרחית</p>
                </div>
            </div>
            <div className="header-cons">
                <div className="cons cons-1">
                    <img src="/images/main header/1.jpg" alt=""/>
                    <span className="cons-head">ייעוץ הנדסי</span>
                </div>
                <div className="cons cons-2">
                    <img src="/images/main header/2.jpg" alt=""/>
                    <span className="cons-head">בדיקת תוכניות</span>
                </div>
                <div className="cons cons-3">
                    <img src="/images/main header/3.jpg" alt=""/>
                    <span className="cons-head">תיכנון הנדסי</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
