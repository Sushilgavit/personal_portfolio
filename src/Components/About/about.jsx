import React from "react";
import './About.css'
import logo from '../../assets/logo.png'
import about_pic from '../../assets/about_pic.png'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1> About me </h1>
                {/* <img src={logo} alt/> */}
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={about_pic} alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I'm Sushil Gavit,  </p>
                        <p>Passionate full-stack developer skilled in JavaScript, React, Java, and Spring Boot. Proficient in MySQL and MongoDB. Strong foundation in HTML, CSS, and JavaScript. Eager to contribute expertise and enthusiasm to projects.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML + CSS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>React.JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Java</p><hr style={{width:"75%"}}/></div>
                        <div className="about-skill"><p>Spring-Boot</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>MySQL</p><hr style={{width:"80%"}}/></div>
                            
                
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
