import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import Sushil_Gavit_Resume from '../../assets/Sushil_Gavit_Resume.pdf'

import { FaGithub, FaTwitter ,FaLinkedin } from "react-icons/fa";



import { useTypewriter ,Cursor } from "react-simple-typewriter";


const Hero = () => {

    const redirectToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/sushilg1/', '_blank');
    };

    const redirectToGitHub = () => {
        window.open('https://github.com/Sushilgavit', '_blank');
    };
    
    const redirectToTwitter = () => {
        window.open('https://x.com/sushilGavit?t=YxJ2ojUR2PNw2jYV5NQYwA&s=09', '_blank');
    };

    const [text] =useTypewriter(
        {
            words : ["Full Stack Devloper." , "Freelancer." , "Front End Devloper."],
            loop :true ,
            typeSpeed :40,
            deleteSpeed :40,
            delaySpeed: 2000,

        } );
    return (
        <div id='home' className="hero">
            <img src={profile_img} alt="" />
            <h1><span>Hi ,I'm Sushil Gavit</span> </h1>
            <h2>a <span>{text}</span>
                <Cursor 
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff014f"
                />
            </h2>
            {/* <p>
                Passionate full-stack developer skilled in JavaScript, React, Java, and Spring Boot. Proficient in MySQL and MongoDB. Strong foundation in HTML, CSS, and JavaScript. Eager to contribute expertise and enthusiasm to projects.
            </p> */}
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
                <div className="hero-resume">
                    <a href={Sushil_Gavit_Resume} download> My resume </a>
                </div>

            </div>
            <div className="hero-Social-media">
                <span className="likdin" onClick={redirectToLinkedIn}>
                    <FaLinkedin/>
                </span>
                <span className="Github" onClick={redirectToGitHub}>
                    <FaGithub/>
                </span>
                <span className="twitter" onClick={redirectToTwitter}>
                    <FaTwitter/>
                </span>
            </div>
        </div>
    )
}

export default Hero