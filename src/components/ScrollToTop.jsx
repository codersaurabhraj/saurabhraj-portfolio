import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTop = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

    };


    return (
        <>
            {showButton && (
                <button className="scroll-top-btn" aria-label="Scroll to top"
                    onClick={scrollToTop}>
                    <i className="ri-arrow-up-line"></i>
                </button>
            )}

        </>
    )


};

export default ScrollToTop;