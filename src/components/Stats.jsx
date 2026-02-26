import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import car from "../assets/car.png";
import calendar from "../assets/calendar.png";
import group from "../assets/people.png";
import smartphone from "../assets/smartphone.png";
import shopping from "../assets/cart.png";
import CountUp from "react-countup";



/* ── Parent orchestrates stagger, child defines individual animation ── */
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Stats() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Element name="stats" className="stats-container-wrapper">
            <div className="stats-spacing" ref={ref}>
                <div className="stats-spacing" ref={ref}>
                    <h2>Did you know?</h2>

                    {/* Changed to stats-grid for CSS Grid layout */}
                    <div className="stats-grid">
                        {/* Card 1 */}
                        <div className="stats-card">
                            <img src={car} alt="drivers stats" />
                            <div className="stats-info">
                                <div className="stats-big">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={81}
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
                                    {/* https://iobillboard.com/billboard-statistics/ */}
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="stats-card">
                            <img src={calendar} alt="calendar stats" />
                            <div className="stats-info">
                                <div className="stats-big">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={250000}
                                            duration={2}
                                            separator=","
                                        />
                                    ) : (
                                        "0"
                                    )}{" "}
                                </div>
                                <div className="stats-desc">
                                    monthly impressions from passing vehicles in
                                    Cape Town
                                    {/* https://www.bizcommunity.com/article/tractor-outdoor-ramps-up-its-cape-town-cbd-presence-with-two-new-high-profile-sites-171246a#:~:text=About%20the%20sites.%20Located%20within%20two%20of,global%20visitors%20with%20around%2081%2C000%20monthly%20impressions. */}
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="stats-card">
                            <img src={group} alt="population stats" />
                            <div className="stats-info">
                                <div className="stats-big">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={85}
                                            duration={2}
                                            separator=","
                                        />
                                    ) : (
                                        "0"
                                    )}
                                    %
                                </div>
                                <div className="stats-desc">
                                    of consumers make a point to read billboards
                                    {/* https://iobillboard.com/billboard-statistics/ */}
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="stats-card">
                            <img src={smartphone} alt="smartphone stats" />
                            <div className="stats-info">
                                <div className="stats-big">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={66}
                                            duration={2}
                                            separator=","
                                        />
                                    ) : (
                                        "0"
                                    )}
                                    %
                                </div>
                                <div className="stats-desc">
                                    of consumers used their smart phone in
                                    response to seeing a billboard
                                    {/* https://iobillboard.com/billboard-statistics/ */}
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="stats-card">
                            <img src={shopping} alt="shopping stats" />
                            <div className="stats-info">
                                <div className="stats-big">
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={20}
                                            duration={2}
                                            separator=","
                                        />
                                    ) : (
                                        "0"
                                    )}
                                    %
                                </div>
                                <div className="stats-desc">
                                    of billboard viewers visits a business after
                                    seeing the ad
                                    {/* https://iobillboard.com/billboard-statistics/ */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <motion.p
                    className="stats-bottom-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    Billboards aren't just ads — they're a statement. They work
                    like word of mouth, leaving a strong and lasting impression
                    that digital noise can't match. In a world where anyone can
                    post online for free, a billboard shows you're serious,
                    established, and ready to be seen.
                </motion.p>
            </div>
        </Element>
    );
}
