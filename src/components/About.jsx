import { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ad from "../assets/ad.png";
import create from "../assets/creativity.png";
import relocate from "../assets/relocation.png";
import trust from "../assets/trust.png";

function AboutCard({ icon, heading, text, backText, index }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
        >
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
                        <button
                            className="card-button"
                            onClick={() => setIsFlipped(true)}
                        >
                            Read More
                        </button>
                    </div>

                    {/* BACK FACE */}
                    <div className="about-card-face about-card-back">
                        <div className="card-heading">More Info</div>
                        <div className="card-text back-text">{backText}</div>
                        <button
                            className="card-button outline"
                            onClick={() => setIsFlipped(false)}
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

    return (
        <Element name="about" className="about-container">
            <div className="about-spacing">
                <motion.div
                    ref={ref}
                    className="about-heading"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-badge">Who We Are</div>
                    <h2>About Us</h2>
                    <div className="about-text">
                        Futura Signs has been turning heads since 1986 —
                        delivering bold, high-quality signage solutions across
                        Cape Town.
                    </div>
                </motion.div>

                <div className="about-info">
                    <AboutCard
                        index={0}
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
                        index={1}
                        icon={relocate}
                        heading="Relocation & Refurbishment"
                        text="We offer unique billboard relocation and refurbishment services — carefully dismantling, storing, and reinstalling."
                        backText="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />

                    <AboutCard
                        index={2}
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
                        index={3}
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

                <motion.div
                    className="about-footer-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Let's build something bold together. <br />
                    In fact, let's build this country!
                </motion.div>
            </div>
        </Element>
    );
}
