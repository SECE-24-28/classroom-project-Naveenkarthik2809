import React from 'react';
import {FurnitureStyle} from './furniture-style.js';

const Furniture = () => {
return (
    <FurnitureStyle>
        <div className="hero">
            <div className="hero-content">
                <h1>
                    <span className="orange">Furniture</span> That <br />
                    Elevates Your <span className="orange">Space</span>
                </h1>

                <p className="subtext">Crafted for comfort. Designed for modern living.</p>

                <div className="btn-group">
                    <button className="btn-dark">Shop Now</button>
                    <button className="btn-light">Check New Arrivals</button>
                </div>
            </div>

            <div className="hero-image">
                <img src="your-image.jpg" alt="Furniture Image" />
            </div>
        </div>
    </FurnitureStyle>
);
};

export default Furniture;