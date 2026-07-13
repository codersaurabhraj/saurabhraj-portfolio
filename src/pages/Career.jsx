import React from 'react'
import './Career.css'
import experience from "../data/experience";
import education from '../data/education'
import certification from '../data/certification'

const Career = () => {
    return (
        <>
            <section id="experience" className='career-section' data-aos="fade-right">

                {/* Experience Card */}
                <div className="experience-card" /* data-aos="fade-right" */>
                    <h2>
                        <i className="ri-briefcase-4-fill"></i>
                        Experience
                    </h2>

                    {experience.map((item) => (
                        <div className="experience-item" key={item.id}>
                            <div className="experience-icon">
                                <i className="ri-briefcase-4-line"></i>
                            </div>

                            <div className="experience-content">
                                <div className="experience-top">

                                    <div className='title-duration'>
                                        <h3>{item.title}</h3>
                                        <span>{item.duration}</span>

                                    </div>
                                    <h6>{item.company}</h6>


                                </div>

                                <p>{item.description}</p>

                            </div>
                        </div>
                    ))}
                </div>



                {/* Education Card */}
                <div id='education' className="education-card" /* data-aos="fade-up" */>
                    <h2>
                        <i className="ri-graduation-cap-fill"></i>
                        Education
                    </h2>

                    {education.map((item) => (
                        <div className="education-item" key={item.id}>
                            <div className="education-icon">
                                <i className="ri-graduation-cap-fill"></i>
                            </div>

                            <div className="education-content">
                                <div className="education-top">
                                    <div className='course-duration'>
                                        <h3>{item.course}</h3>
                                        <span>{item.duration}</span>
                                    </div>
                                    <h6>{item.university}</h6>
                                </div>

                                <p>CGPA: {item.cgpa}</p>

                            </div>
                        </div>
                    ))}
                </div>


                {/* Certification Card */}
                <div id='certifications' className="certification-card" /* data-aos="fade-left" */>
                    <h2>
                        <i className="ri-certificate-2-fill"></i>
                        Certifications
                    </h2>


                    {certification.map((item) => (
                        <div className="certification-item" key={item.id}>
                            <div className="certification-icon">
                                <i className="ri-certificate-2-fill"></i>
                            </div>

                            <div className="certification-content">
                                <div className="certification-top">
                                    <div className="certification-duration">
                                        <h3>{item.course}</h3>
                                        <span>{item.duration}</span>
                                    </div>
                                    <h6>{item.organization}</h6>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>

            </section>

        </>
    )
}

export default Career
