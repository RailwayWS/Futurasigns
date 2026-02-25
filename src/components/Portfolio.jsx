import { useState } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import billboard1 from "../assets/Portfolio/billboard-northpoint.jpg";
import billboard2 from "../assets/Portfolio/billboard-northpoint2.jpg";
import billboard3 from "../assets/Portfolio/billboard-tokaiestate.jpg";
import billboard4 from "../assets/Portfolio/billboards-001.jpg";
import billboard5 from "../assets/Portfolio/billboards-002.jpg";
import billboard6 from "../assets/Portfolio/billboards-003.jpg";
import billboard7 from "../assets/Portfolio/factory-signage-elliot-avenue.jpg";
import billboard8 from "../assets/Portfolio/factory-signage-tigerbrands.jpg";
import billboard9 from "../assets/Portfolio/futura-billboards-01.jpg";
import billboard10 from "../assets/Portfolio/large-format-cadiz.jpg";
import billboard11 from "../assets/Portfolio/office-signage-aintree-park.jpg";
import billboard12 from "../assets/Portfolio/office-signage-excellerate.jpg";
import billboard13 from "../assets/Portfolio/office-signage-northlink-collge.jpg";
import billboard14 from "../assets/Portfolio/office-signage-paardevlei.jpg";
import billboard15 from "../assets/Portfolio/office-signage-stonethree.jpg";
import billboard16 from "../assets/Portfolio/office-signage-xeon.jpg";
import billboard17 from "../assets/Portfolio/signage-001.jpg";
import billboard18 from "../assets/Portfolio/vehicle-signage-alplas.jpg";
import billboard19 from "../assets/Portfolio/vehicle-signage-groote-post.jpg";
import billboard20 from "../assets/Portfolio/vehicle-signage-llevell.jpg";
import billboard21 from "../assets/Portfolio/vehicle-signage-mokwena.jpg";
import billboard22 from "../assets/Portfolio/vehicle-signage-penflex.jpg";
import billboard23 from "../assets/Portfolio/vehicle-signage-sawelding.jpg";

const projects = [
    { name: "NorthPoint Billboard", image: billboard1, category: "Billboards" },
    { name: "NorthPoint Phase 2", image: billboard2, category: "Billboards" },
    { name: "Tokai Estate", image: billboard3, category: "Billboards" },
    { name: "Billboard Installation", image: billboard4, category: "Billboards" },
    { name: "Billboard Project", image: billboard5, category: "Billboards" },
    { name: "Billboard Display", image: billboard6, category: "Billboards" },
    { name: "Elliot Avenue Factory", image: billboard7, category: "Factory Signage" },
    { name: "Tiger Brands Factory", image: billboard8, category: "Factory Signage" },
    { name: "Futura Billboard", image: billboard9, category: "Billboards" },
    { name: "Cadiz Large Format", image: billboard10, category: "Billboards" },
    { name: "Aintree Park Office", image: billboard11, category: "Office Signage" },
    { name: "Excellerate Office", image: billboard12, category: "Office Signage" },
    { name: "Northlink College", image: billboard13, category: "Office Signage" },
    { name: "Paardevlei Office", image: billboard14, category: "Office Signage" },
    { name: "StoneThree Office", image: billboard15, category: "Office Signage" },
    { name: "Xeon Office", image: billboard16, category: "Office Signage" },
    { name: "Custom Signage", image: billboard17, category: "Billboards" },
    { name: "Alplas Vehicle", image: billboard18, category: "Vehicle Signage" },
    { name: "Groote Post Vehicle", image: billboard19, category: "Vehicle Signage" },
    { name: "Llevell Vehicle", image: billboard20, category: "Vehicle Signage" },
    { name: "Mokwena Vehicle", image: billboard21, category: "Vehicle Signage" },
    { name: "Penflex Vehicle", image: billboard22, category: "Vehicle Signage" },
    { name: "SA Welding Vehicle", image: billboard23, category: "Vehicle Signage" },
];

const categories = [
    "All",
    "Billboards",
    "Office Signage",
    "Vehicle Signage",
    "Factory Signage",
];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All");
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const filteredProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <Element name="portfolio" className="portfolio-container">
            <motion.div
                ref={ref}
                className="portfolio-header"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <div className="section-badge">Our Work</div>
                <h2>Portfolio</h2>
                <p className="section-subtitle">
                    A showcase of our billboard, office, vehicle, and factory
                    signage projects across the Western Cape.
                </p>
            </motion.div>

            <motion.div
                className="portfolio-filters"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                        onClick={() => setActiveFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </motion.div>

            <div className="portfolio-grid">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.name}
                            className="portfolio-item"
                            layout
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.35 }}
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                loading="lazy"
                            />
                            <div className="portfolio-overlay">
                                <div>
                                    <div className="portfolio-overlay-text">
                                        {project.name}
                                    </div>
                                    <div className="portfolio-overlay-category">
                                        {project.category}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </Element>
    );
}
