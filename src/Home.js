import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common
                name='Grow Your Business'
                imgsrc={web}
                visit='./service'
                btnname="Get Started"
            />
        </>
    );
}

export default Home;