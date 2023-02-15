import React from 'react';
import "./Splayer.css"

const Splayer = ({pl,cart,setCart}) => {
    const {strThumb,strBirthLocation}=pl

    const handleCart = () =>{
        if(cart){
            const newCart = [...cart,pl]
            setCart(newCart)
        }
    }
    console.log(cart);
    return (
        <div className='cart-d'>
            <img className='img-style' src={strThumb} alt="" />
            <h3>{strBirthLocation}</h3>
            <button className='buttton-cart'>Detail</button>
            <button onClick={handleCart} className='buttton-cart'>Add to cart</button>
            <button className='buttton-cart'>Bookmark</button>
        </div>
    );
};

export default Splayer;