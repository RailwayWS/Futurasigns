import { Element } from "react-scroll";
import location_pin from "../assets/location_pin.png";
import email_logo from "../assets/email.png";
import phone_logo from "../assets/phone.png";
import { Reveal } from "./Reveal";

export default function Contact() {
    return (
        <Reveal>
            <Element name="contact" className="contact-container">
                <div className="contact-content-wrapper">
                    {/* Left Side: Info */}
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="icon-box">
                                <img src={location_pin} alt="pin" />
                            </div>
                            <div className="text-box">
                                <h3>Address</h3>
                                <p>
                                    9 Printers Way, Marconi Beam
                                    <br />
                                    Cape Town, 7447
                                </p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="icon-box">
                                <img src={email_logo} alt="email logo" />
                            </div>
                            <div className="text-box">
                                <h3>Email</h3>
                                <p>futurasales@mweb.co.za</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="icon-box">
                                <img src={phone_logo} alt="phone logo" />
                            </div>
                            <div className="text-box">
                                <h3>Call Us</h3>
                                <p>021 551 1814</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <form
                        className="contact-form"
                        action="https://api.web3forms.com/submit"
                        method="POST"
                    >
                        <input
                            type="hidden"
                            name="access_key"
                            value="31154c19-76f9-4b6b-a4ba-8aa9f8ac3a6c"
                        />

                        <div className="form-header">
                            <h2>Get In Touch</h2>
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
                    </form>
                </div>
            </Element>
        </Reveal>
    );
}
