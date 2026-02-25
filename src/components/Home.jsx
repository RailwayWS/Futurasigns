import { Element, Link } from "react-scroll";
import { motion } from "framer-motion";
import background from "../assets/background2.jpg";

export default function Home({ isLoaded }) {
    return (
        <Element name="home" className="hero-container">
            <div
                className="hero-background"
                style={{ backgroundImage: `url(${background})` }}
            />
            <motion.div
                className="hero-info"
                initial={{ opacity: 0, y: 40 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.5 }}
                >
                    Your Trusted Signage Partner in Cape Town
                </motion.h1>
                <motion.p
                    className="hero-tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Turning heads since 1986 — premium billboard design,
                    fabrication, and installation across the Western Cape.
                </motion.p>
                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.1 }}
                >
                    <Link to="portfolio" smooth={true} duration={800} offset={-60}>
                        <button className="button-primary">See our work</button>
                    </Link>
                    <Link to="contact" smooth={true} duration={800} offset={-60}>
                        <button className="button-invert">Find us</button>
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.8 }}
            >
                <span>Scroll</span>
                <div className="scroll-indicator-arrow" />
            </motion.div>
        </Element>
    );
}
