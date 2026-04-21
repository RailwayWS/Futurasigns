import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import location_pin from "../assets/location_pin.png";
import email_logo from "../assets/email.png";
import phone_logo from "../assets/phone.png";

const contactCards = [
    {
        icon: location_pin,
        alt: "location",
        title: "Address",
        detail: (
            <>
                9 Printers Way, Marconi Beam
                <br />
                Cape Town, 7447
            </>
        ),
    },
    {
        icon: email_logo,
        alt: "email",
        title: "Email",
        detail: "futurasales@mweb.co.za",
    },
    {
        icon: phone_logo,
        alt: "phone",
        title: "Call Us",
        detail: "021 551 1814",
    },
];

export default function Contact() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <Element name="contact" className="contact-container">
            <motion.div
                ref={ref}
                className="contact-section-header"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <div className="section-badge">Get In Touch</div>
                <h2>Contact Us</h2>
                <p className="section-subtitle">
                    Ready to make a bold statement? Reach out and let's discuss
                    your next project.
                </p>
            </motion.div>

            <div className="contact-content-wrapper">
                {/* Left Side: Info + Map */}
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {contactCards.map((card, i) => (
                        <div
                            key={card.title}
                            className="contact-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + i * 0.1,
                            }}
                        >
                            <div className="icon-box">
                                <img src={card.icon} alt={card.alt} />
                            </div>
                            <div className="text-box">
                                <h3>{card.title}</h3>
                                <p>{card.detail}</p>
                            </div>
                        </div>
                    ))}

                    {/* Embedded Google Map */}
                    <motion.div
                        className="contact-map"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <iframe
                            title="Futura Signs Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.3!2d18.5242!3d-33.8636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5ba32c02a34d%3A0x123456789!2s9+Printers+Way%2C+Marconi+Beam%2C+Cape+Town%2C+7441!5e0!3m2!1sen!2sza!4v1700000000000"
                            width="100%"
                            height="220"
                            style={{
                                border: "none",
                                borderRadius: "16px",
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.form
                    className="contact-form"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <input
                        type="hidden"
                        name="access_key"
                        value="31154c19-76f9-4b6b-a4ba-8aa9f8ac3a6c"
                    />

                    <div className="form-header">
                        <h2>Send a Message</h2>
                        <p>We'll get back to you as soon as possible.</p>
                    </div>

                    <div className="input-group">
                        <input
                            type="text"
                            name="full-name"
                            placeholder="Name and Surname"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <textarea
                            name="message"
                            placeholder="How can we help you?"
                            required
                        />
                    </div>

                    <button type="submit">Send Message</button>
                </motion.form>
            </div>
        </Element>
    );
}
