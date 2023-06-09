import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="right">
                    <h1>Georgia.dev</h1>
                </div>
                <div className="left">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;