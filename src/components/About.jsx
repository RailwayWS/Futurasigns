import { useState } from "react";
import { Element } from "react-scroll";
import ad from "../assets/ad.png";
import create from "../assets/creativity.png";
import relocate from "../assets/relocation.png";
import trust from "../assets/trust.png";
import { Reveal } from "./Reveal";

// Sub-component for individual flip functionality
function AboutCard({ icon, heading, text, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="about-card-scene">
            <div
                className={`about-card-inner ${isFlipped ? "is-flipped" : ""}`}
            >
                {/* FRONT FACE */}
                <div className="about-card-face about-card-front">
                    <div className="card-icon-wrapper">
                        <img src={icon} alt="icon" />
                    </div>
                    <div className="card-heading">{heading}</div>
                    <div className="card-text">{text}</div>
                    <button className="card-button" onClick={handleFlip}>
                        Read More
                    </button>
                </div>

                {/* BACK FACE */}
                <div className="about-card-face about-card-back">
                    <div className="card-heading">More Info</div>
                    <div className="card-text back-text">{backText}</div>
                    <button
                        className="card-button outline"
                        onClick={handleFlip}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <Reveal>
            <Element name="about" className="about-container">
                <div className="about-spacing">
                    <div className="about-heading">
                        <h2>About Us</h2>
                        <div className="about-text">
                            Futura Signs has been turning heads since 1986.
                        </div>
                    </div>

                    <div className="about-info">
                        <AboutCard
                            icon={ad}
                            heading={
                                <>
                                    Billboards Built <br /> to Last
                                </>
                            }
                            text="Specialists in billboard design, fabrication, and installation. Trusted for decades for structures that endure."
                            backText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        />

                        <AboutCard
                            icon={relocate}
                            heading="Relocation & Refurbishment"
                            text="We offer unique billboard relocation and refurbishment services — carefully dismantling, storing, and reinstalling."
                            backText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        />

                        <AboutCard
                            icon={create}
                            heading={
                                <>
                                    Custom Signage <br /> Solutions
                                </>
                            }
                            text="Beyond billboards, we create a wide range of custom signage. If you need it, we can make it."
                            backText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                        />

                        <AboutCard
                            icon={trust}
                            heading={
                                <>
                                    Your Trusted <br /> Partner
                                </>
                            }
                            text="A vibrant team known for quality craftsmanship, excellent service, and competitive pricing across Cape Town."
                            backText="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
                        />
                    </div>

                    <div className="about-footer-text">
                        Let's build something bold together. <br />
                        In fact, let's build this country!
                    </div>
                </div>
            </Element>
        </Reveal>
    );
}
