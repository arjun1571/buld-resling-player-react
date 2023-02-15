import React from 'react';
import "./Splayer.css"

const Splayer = ({pl}) => {
    console.log(pl);
    return (
        <div className='cart-d'>
            <img className='img-style' src={pl?.strThumb} alt="" />
            <h3>{pl.strBirthLocation}</h3>
            <button className='buttton-cart'>Detail</button>
            <button className='buttton-cart'>Add to cart</button>
            <button className='buttton-cart'>Bookmark</button>
        </div>
    );
};

export default Splayer;