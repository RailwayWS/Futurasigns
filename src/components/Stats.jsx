import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import car from "../assets/car.png";
import calendar from "../assets/calendar.png";
import group from "../assets/people.png";
import smartphone from "../assets/smartphone.png";
import shopping from "../assets/cart.png";
import CountUp from "react-countup";

const stats = [
    {
        icon: car,
        alt: "drivers stats",
        end: 81,
        suffix: "%",
        desc: "of drivers notice billboards",
    },
    {
        icon: calendar,
        alt: "calendar stats",
        end: 250000,
        suffix: "",
        desc: "monthly impressions from passing vehicles in Cape Town",
    },
    {
        icon: group,
        alt: "population stats",
        end: 85,
        suffix: "%",
        desc: "of consumers make a point to read billboards",
    },
    {
        icon: smartphone,
        alt: "smartphone stats",
        end: 66,
        suffix: "%",
        desc: "of consumers used their smartphone in response to seeing a billboard",
    },
    {
        icon: shopping,
        alt: "shopping stats",
        end: 20,
        suffix: "%",
        desc: "of billboard viewers visit a business after seeing the ad",
    },
];

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
                <motion.div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "16px",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-badge">The Numbers</div>
                    <h2>Did You Know?</h2>
                </motion.div>

                <motion.div
                    className="stats-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="stats-card"
                            variants={cardVariants}
                        >
                            <img src={stat.icon} alt={stat.alt} />
                            <div className="stats-info">
                            <div className="stats-big">
                                {/* FIX: Remove the ternary operator. 
                                Render CountUp always, but toggle the 'end' prop 
                                based on inView state.
                                */}
                                <CountUp
                                    start={0}
                                    end={inView ? stat.end : 0}
                                    duration={2.2}
                                    separator=","
                                />
                                {stat.suffix}
                            </div>
                            <div className="stats-desc">{stat.desc}</div>
                        </div>
                        </motion.div>
                    ))}
                </motion.div>

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
