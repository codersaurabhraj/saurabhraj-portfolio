import React, { useEffect, useState } from 'react'     /* useState for hamburger menu */
import './Navbar.css'
import scrollToSection from '../utils/scrollToSection'      /* scrollToSection function import */

const Navbar = () => {

    /* ===============================Mobile me Hamburger Menu k liye state============================= */
    const [menuOpen, setMenuOpen] = useState(false);

    /* ===============================Mobile me body scroll band karo============================= */
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [menuOpen]);




    return (
        <>
            <nav id='nav' className='navbar-section'>
                <div className='nav-container'>

                    {/* ===================NAVBAR LEFT SIDE======================= */}

                    <div className='nav-left'>
                        <div className="logo-header" onClick={() => scrollToSection("home")}>
                            <div className="logo">SR</div>
                            <h2>Saurabh Raj</h2>
                        </div>
                    </div>

                    {/* ======================= NAVBAR RIGHT SIDE Hamburger Icon=======================  */}
                    <div
                        className="menu-icon"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
                    </div>

                    {/* ======================= NAVBAR RIGHT SIDE=======================  */}

                    <div className={`nav-right ${menuOpen ? "active" : ""}`}>
                        <ul className="nav-links">
                            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                            <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
                            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                            <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
                            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                        </ul>
                        <a href="/Saurabh_Raj_Resume.pdf" onClick={() => setMenuOpen(false)} download>
                            <button className="dwnld-resume-btn">
                                Download Resume
                                <i className="ri-arrow-down-line"></i>
                            </button>
                        </a>
                    </div>

                </div>

                {menuOpen && (
    <div
        className="menu-overlay"
        onClick={() => setMenuOpen(false)}
    ></div>
)}
            </nav>
        </>
    )
}

export default Navbar
