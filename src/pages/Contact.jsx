import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import './Contact.css'

/* IMPORTING THESE KEYS FROM .ENV FILE */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const Contact = () => {

    /* FORM DATA FETCHER */
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });


    /* DYNAMIC UX VIEW */
    const [loading, setLoading] = useState(false);


    /* FORM SUBMIT BUTTON HANDLER */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            alert("Please fill in all fields.");
            return;
        }

        /* ========Email Format Validation=============  */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setLoading(true)
        try {
            const response = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                PUBLIC_KEY
            );

            console.log("Success:", response);

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
            alert("Message sent successfully!");

        } catch (error) {
            console.log("Error:", error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <section id="contact" className='contact-section' data-aos="fade-up">

                <div className="contact-wrapper">
                    <div className="contact-container">

                        <div className='contact-me'>
                            <i className="ri-user-line"></i>
                            <h2>Contact Me</h2>
                        </div>

                        <div className='email'>
                            <i className="ri-mail-fill"></i>
                            <div>
                                <p>Email</p>
                                <a href="mailto:saurabhraj.8511@gmail.com">
                                    saurabhraj.8511@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className='phone'>
                            <i className="ri-phone-fill"></i>
                            <div>
                                <p>Phone</p>
                                <a href="tel:+91748081412">
                                    +91 7480810412
                                </a>
                            </div>
                        </div>

                        <div className='location'>
                            <i className="ri-map-pin-line"></i>
                            <div>
                                <p>Location</p>
                                <span>Bangalore, Karnataka</span>
                            </div>
                        </div>

                        <div className='linkedin'>
                            <i className="ri-linkedin-box-fill"></i>
                            <div>
                                <p>Linkedin</p>
                                <a
                                    href="https://linkedin.com/in/saurabh-raj-44b580217"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    linkedin.com/in/saurabh-raj-44b580217
                                </a>
                            </div>
                        </div>

                        <div className='github'>
                            <i className="ri-github-fill"></i>
                            <div>
                                <p>GitHub</p>
                                <a
                                    href="https://github.com/codersaurabhraj"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    github.com/codersaurabhraj
                                </a>
                            </div>
                        </div>


                    </div>
                    

                    <div className="form-container">
                        <form className='contact-form' onSubmit={handleSubmit}>

                            <div className='row'>
                                <div className='input-box'>
                                    <label>Your Name</label>
                                    <input type="text" name="name" placeholder='Enter Your name'
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }} />
                                </div>

                                <div className='input-box'>
                                    <label>Your Email</label>
                                    <input type="text" name="email" placeholder='Enter Your Email' value={formData.email} onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }} />
                                </div>
                            </div>

                            <div className='input-box'>
                                <label>Subject</label>
                                <input type="text" name="subject" placeholder='Enter Subject' value={formData.subject} onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        subject: e.target.value
                                    })
                                }} />
                            </div>

                            <div className='input-box'>
                                <label>Message</label>
                                <textarea
                                    rows="5"
                                    name='message'
                                    placeholder="Write your message..."
                                    value={formData.message} onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            message: e.target.value
                                        })
                                    }}
                                ></textarea>
                            </div>

                            <button type="submit"
                                disabled={loading}

                            >
                                {loading ? "Sending..." : "Send Message"}

                                {!loading && <i className="ri-arrow-right-line"></i>}
                            </button>
                        </form>
                    </div>


                    <div className="cta-card">
                        <div className="cta-icon">
                            <i className="ri-send-plane-fill"></i>
                        </div>

                        <h2>Let's work together!</h2>

                        <p>
                            I'm always open to discussing new projects,
                            creative ideas or opportunities to be part
                            of your visions.
                        </p>
                    </div>
                </div>



            </section>

        </>
    )
}

export default Contact
