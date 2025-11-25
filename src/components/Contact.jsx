import { Element } from "react-scroll";
import location_pin from "../assets/location_pin.png";
import email_logo from "../assets/email.png";
import phone_logo from "../assets/phone.png";
import { Reveal } from "./Reveal";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Reveal>
            <Element name="contact" className="contact-container">
                <div className="contact-info">
                    <div className="contact-card">
                        <img src={location_pin} alt="pin" />
                        <h3> Address</h3>
                        <p>9 Printers Way, Marconi Beam, Cape Town, 7447</p>
                    </div>

                    <div className="contact-card">
                        <img src={email_logo} alt="email logo" />
                        <h3> Email </h3>
                        <p>futurasales@mweb.co.za</p>
                    </div>

                    <div className="contact-card">
                        <img src={phone_logo} alt="phone logo" />
                        <h3> Call Us </h3>
                        <p>021 551 1814</p>
                    </div>
                </div>

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

                    <h2>
                        <span className="contact-form__heading">
                            Contact Us
                        </span>
                    </h2>
                    <input
                        type="text"
                        name="full-name"
                        placeholder="Name and Surname"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                    />

                    <textarea
                        type="text"
                        name="message"
                        placeholder="Message..."
                    />

                    <button> Send</button>
                </form>
            </Element>
        </Reveal>
    );
}
