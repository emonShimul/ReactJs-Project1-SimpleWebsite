import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
import Common from './Common';

const About = () => {
    return (
        <>
            <Common
                name='Welcome to About Page'
                imgsrc={web}
                visit='./contact'
                btnname="Contact Now"
            />
        </>
    );
}

export default About;