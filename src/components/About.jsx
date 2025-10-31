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
                                Buildboards Built to Last
                            </div>
                            <div className="card-text">
                                We are specialists in billboards — it's our
                                passion and our craft. From design to
                                fabrication to installation, we build billboards
                                that are made to last. Over the decades, we've
                                become a trusted name in outdoor advertising,
                                known for structures that stand the test of
                                time.
                            </div>
                        </div>

                        <div className="about-card">
                            <img src={relocate} alt="ad" />
                            <div className="card-heading">
                                Relocation & <br />
                                Refurbishment Services
                            </div>
                            <div className="card-text">
                                For our long-term clients, we offer a unique
                                service: billboard relocation and refurbishment.
                                We'll carefully dismantle your billboard, store
                                it securely, and give it a new lease on life at
                                a fresh location — a rare offering in our
                                industry.
                            </div>
                        </div>

                        <div className="about-card">
                            <img src={create} alt="ad" />
                            <div className="card-heading">
                                Custom Signage Solutions
                            </div>
                            <div className="card-text">
                                While billboards are our bread and butter, we
                                also create a wide range of custom signage. If
                                you need it, just ask — chances are, we can make
                                it.
                            </div>
                        </div>

                        <div className="about-card">
                            <img src={trust} alt="ad" />
                            <div className="card-heading">
                                Your Trusted Signage Partner
                            </div>
                            <div className="card-text">
                                We're a vibrant, experienced team that believes
                                in doing great work and building lasting
                                relationships. With a reputation for quality
                                craftsmanship, excellent client service, and
                                competitive pricing, Futura Signs is your
                                reliable signage partner in Cape Town and
                                beyond.
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
