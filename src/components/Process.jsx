import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import billBlue from "../assets/billBlue.png";

export default function Process() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <Element name="process" className="parallax-section">
            <div
                className="parallax-bg"
                style={{ backgroundImage: `url(${billBlue})` }}
            />
            <div className="parallax-overlay" />

            <div className="parallax-content" ref={ref}>
                <motion.div
                    className="section-badge parallax-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    How It Works
                </motion.div>

                <motion.h2
                    className="parallax-heading"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    From Concept to Installation
                </motion.h2>

                <motion.p
                    className="parallax-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Every project begins with a thorough site survey, followed
                    by expert design and engineering. We handle everything from
                    concept to installation — delivering signage that's built to
                    last and impossible to miss.
                </motion.p>

                <motion.div
                    className="parallax-stats-row"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                >
                    <div className="parallax-stat">
                        <span className="parallax-stat-number">01</span>
                        <span className="parallax-stat-label">Site Survey</span>
                    </div>
                    <div className="parallax-stat">
                        <span className="parallax-stat-number">02</span>
                        <span className="parallax-stat-label">Design & Plan</span>
                    </div>
                    <div className="parallax-stat">
                        <span className="parallax-stat-number">03</span>
                        <span className="parallax-stat-label">Build & Install</span>
                    </div>
                </motion.div>
            </div>
        </Element>
    );
}
