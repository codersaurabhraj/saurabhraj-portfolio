import React, { useEffect, useState } from 'react'
import './Hero.css'
import Portfolio from "../assets/images/Portfolio.jpeg";
import scrollToSection from '../utils/scrollToSection';

const Hero = () => {

    const fullText = "Python Full Stack Developer";

    const [text, setText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {

        if (charIndex < fullText.length) {

            const timer = setTimeout(() => {
                setText(prev => prev + fullText[charIndex]);
                setCharIndex(prev => prev + 1);
            }, 80);

            return () => clearTimeout(timer);
        }

    }, [charIndex]);

    return (
        <>
            <section id="home" className="hero-section" data-aos="fade-up">
                <div className='hero-container'>
                    <div className='hero-left'>
                        <div className='aboutme'>
                            <p className='greeting'>Hi, I'm</p>
                            <h2 className='name'>Saurabh <span>Raj</span></h2>
                            <p className="profession">
                                {text}
                                <span className="cursor">|</span>
                            </p>
                            <p className='description'>I build modern web applications using React.js, Django and SQL.
                                Passionate about problem solving and creating efficient, scalable solutions.</p>
                        </div>
                        <div className='buttons'>
                            <button onClick={() => scrollToSection("projects")}>View Projects <i className="ri-arrow-right-line"></i></button>
                            <a href="/Saurabh_Raj_Resume.pdf" download><button className='resume-btn'>Download Resume <i className="ri-arrow-down-line"></i></button></a>
                            <button onClick={() => scrollToSection("contact")}>Contact Me <i className="ri-send-plane-fill"></i></button>
                        </div>

                        <div className='social-icons'>
                            <p className='sit'>Connect with me</p>
                            <a href="https://github.com/codersaurabhraj" target='_blank'   rel="noopener noreferrer" aria-label="Visit GitHub Profile"><i className="ri-github-fill"></i></a>
                            <a href="https://www.linkedin.com/in/saurabh-raj-44b580217/"   rel="noopener noreferrer" target='_blank' aria-label="Visit Linkedin Profile"><i className="ri-linkedin-box-fill"></i></a>
                            <a href="mailto:saurabhraj.8511@gmail.com"   rel="noopener noreferrer" aria-label="Send Email"><i className="ri-mail-line"></i></a>
                            <a href="https://www.instagram.com/_saurabh._01"   rel="noopener noreferrer" target='_blank' aria-label="Visit Instagram Profile"><i className="ri-instagram-line"></i></a>
                        </div>
                    </div>




                    <div className='hero-right'>
                        <img src={Portfolio} alt="Portfolio img"     loading="lazy" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
