import React from 'react';
import {Link} from '../react-router-dom'
const Home = () => {
    return (
        <div>
            home
            <button > <Link to={{pathname:'/about'}}>去about</Link></button>
        </div>
    );
};

export default Home;