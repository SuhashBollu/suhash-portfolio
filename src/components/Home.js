import React from 'react';
// import Auxi from '../hoc/Auxi';
import Image from '../assets/suhash.jpg';
import gh from '../assets/logos/logo-github.svg';
import ln from '../assets/logos/logo-linkedin.svg';
import Resume from '../assets/SuhashBollu-Resume.pdf';
import Button from '../components/UI/Button/Button';
import './Home.css';

const home = () => {
    return(
        <div className="Home">
            <img className="photo" src={Image} alt=""/>
            <div className="desc">
            <h1>Suhash Bollu</h1>
            <h3 style={{padding:'0 10%'}}>Computer Science Grad Student at University at Buffalo</h3>
            <p style={{padding:'0 10%'}}>I'm a graduate student majoring in Computer Science with solid knowledge
             in computer science fundamentals and industrial experience of 2 years in software development. I'm currently looking for full-time oppurtunties as Software Engineer starting January 2021.</p>
             <a className="resume" href={Resume} target="_blank">View Resume</a>
            <div className="logos">
                <a href="https://github.com/SuhashBollu" target="_blank">
                <img style={{width:'50px', backgroundColor:'white', marginRight:'5px', borderRadius:'5px'}} className="logo" src={gh} alt="GitHub" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/suhash-bollu/">
                    <img style={{width:'50px', backgroundColor:'white', marginLeft:'5px', borderRadius:'5px'}} className="logo" src={ln} alt="LinkedIn" />
                </a>
            </div>
            </div>
        </div>
    );
};

export default home;