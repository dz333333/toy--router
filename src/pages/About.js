import React from 'react';
import { Link } from '../react-router-dom'
const About = () => {
    return (
        <div>
            About
            <button>
                <Link to={{ pathname: '/' }}>去首页</Link>
            </button>
        </div>
    );
};

export default About;