import React,{ useEffect }  from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './pages/Home'
import Projects from './components/Projects'
import Career from './pages/Career'
import Stats from './components/Stats'
import Contact from './pages/Contact'
import Footer from './components/Footer'


const App = () => {
  
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      easing: "ease-in-out",
    });
}, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Home />
      <Projects />
      <Career />
      <Stats />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
