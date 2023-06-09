import React from 'react';

import imgReact from '../../assets/img/reacts.png';
import './PorfolioContent.css';

const PorfolioContent = () => {
    return (
        <div className='content'>
            <div className="right-content">
                <h2>Front-End React <br /> Devoloper </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, possimus.</p>
            </div>
            <div className="left-content">
                <img src={imgReact} alt="" />
            </div>
        </div>
    );
}

export default PorfolioContent;