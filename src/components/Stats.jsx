import { Element } from "react-scroll";
import car from "../assets/car.png";
import calendar from "../assets/calendar(1).png";
import group from "../assets/group.png";
import { Reveal } from "./Reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <Reveal>
            <Element name="stats" className="about-container">
                <div className="stats-spacing" ref={ref}>
                    <h2>Did you know?</h2>
                    <div className="stats-container">
                        <div className="stats-card">
                            <img src={car} alt="stats image" />
                            <div className="stats-info">
                                <div className="stats-big">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={37}
                                            duration={2}
                                            separator=","
                                        />
                                    ) : (
                                        "0"
                                    )}
                                    %
                                </div>
                                <div className="stats-desc">
                                    of drivers notice billboards
                                </div>
                            </div>
                        </div>

                        <div className="stats-card">
                            <img src={calendar} alt="stats image" />
                            <div className="stats-info">
                                <div className="stats-big">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={2}
                                            duration={2}
                                            separator=","
                                        />
                                    ) : (
                                        "0"
                                    )}{" "}
                                    Million
                                </div>
                                <div className="stats-desc">
                                    monthly impressions from passing vehicles
                                </div>
                            </div>
                        </div>

                        <div className="stats-card">
                            <img src={group} alt="stats image" />
                            <div className="stats-info">
                                <div className="stats-big">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={74}
                                            duration={2}
                                            separator=","
                                        />
                                    ) : (
                                        "0"
                                    )}
                                    %
                                </div>
                                <div className="stats-desc">
                                    of the urban population notice outdoor ads
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>
                        {" "}
                        Billboards aren't just ads — they're a statement. They
                        work like word of mouth, leaving a strong and lasting
                        impression that digital noise can't match. In a world
                        where anyone can post online for free, a billboard shows
                        you're serious, established, and ready to be seen. It's
                        the old-school, authentic way to prove your brand is the
                        real deal.
                    </p>
                </div>
            </Element>
        </Reveal>
    );
}
