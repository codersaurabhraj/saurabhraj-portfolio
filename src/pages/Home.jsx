import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import './Home.css'


const Home = () => {
    return (
        <>
            <section className='about-skills-section'>
                <About />
                <Skills />
            </section>
        </>
    )
}

export default Home
