import React, { useEffect, useState } from 'react';
import "./Home.css"
import SinglePlayer from './SinglePlayer/SinglePlayer';

const Home = () => {
    const [input,setInput]=useState("");
    const [player,setPlayer]=useState([]);
    const [cart,setCart]=useState([]);
    // console.log(player);
    useEffect( ()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${input}`)
        .then(res=>res.json())
        .then(data=>setPlayer(data))
    },[input])
    return (
        <div className='home'>
            <div className='left'>
                <input onChange={(e)=>setInput(e.target.value)} type="text" className='search-input' />
                <button className='button'>Search</button>
                <div className='cart'>
                <SinglePlayer cart={cart} setCart={setCart} player={player}></SinglePlayer>
                </div>
            </div>
            <div className='right'>
               <h4>This is player cart</h4>
               {
                cart.map(ct => <li>{ct.idPlayer}</li>)
               }
               
            </div>
        </div>
    );
};

export default Home;