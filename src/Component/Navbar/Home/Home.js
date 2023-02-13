import React, { useState } from 'react';
import "./Home.css"

const Home = () => {
    const [input,setInput]=useState("");
    console.log(input);
    return (
        <div className='home'>
            <div className='left'>
                <input onChange={(e)=>setInput(e.target.value)} type="text" className='search-input' />
                <button className='button'>Search</button>
            </div>
            <div className='right'>
               <h4>This is player cart</h4>
            </div>
        </div>
    );
};

export default Home;