import React from 'react';
import Splayer from '../../SPlayer/Splayer';
import "./SinglePlayer.css"

const SinglePlayer = ({player,cart,setCart}) => {
    
    const pl = player.player;
    console.log(pl);
    return (
        <div className='cart-con'>
            {
                pl?.map((pl) => (<Splayer cart={cart} setCart={setCart} key={pl.idPlayer} pl={pl}></Splayer>))
            }
        </div>
    );
};

export default SinglePlayer;