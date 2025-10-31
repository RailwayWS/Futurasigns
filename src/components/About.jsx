import { Element } from "react-scroll";
import ad from "../assets/ad.png";
import create from "../assets/creativity.png";
import relocate from "../assets/relocation.png";
import trust from "../assets/trust.png";
import { Reveal } from "./Reveal";

export default function About() {
    return (
        <Reveal>
            <Element name="about" className="about-container">
                <div className="about-spacing">
                    <div className="about-heading">
                        <h2> About us</h2>
                        <div className="about-text">
                            Futura Signs has been turning heads since 1986
                        </div>
                    </div>
                    <div className="about-info">
                        <div className="about-card">
                            <img src={ad} alt="ad" />
                            <div className="card-heading">
                                Billboards Built to Last
                            </div>
                            <div className="card-text">
                                Specialists in billboard design, fabrication,
                                and installation. Trusted for decades for
                                structures that endure.
                            </div>
                        </div>

                        <div className="about-card">
                            <img src={relocate} alt="relocation" />
                            <div className="card-heading">
                                Relocation & Refurbishment
                            </div>
                            <div className="card-text">
                                We offer unique billboard relocation and
                                refurbishment services — carefully dismantling,
                                storing, and reinstalling at new locations.
                            </div>
                        </div>

                        <div className="about-card">
                            <img src={create} alt="custom signage" />
                            <div className="card-heading">
                                Custom Signage Solutions
                            </div>
                            <div className="card-text">
                                Beyond billboards, we create a wide range of
                                custom signage. If you need it, we can make it.
                            </div>
                        </div>

                        <div className="about-card">
                            <img src={trust} alt="trust" />
                            <div className="card-heading">
                                Your Trusted Partner
                            </div>
                            <div className="card-text">
                                A vibrant team known for quality craftsmanship,
                                excellent service, and competitive pricing
                                across Cape Town.
                            </div>
                        </div>
                    </div>
                    <div className="about-text">
                        Let's build something bold together. <br />
                        In fact, let's build this country!
                    </div>
                </div>
            </Element>
        </Reveal>
    );
}
