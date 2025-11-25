import { useState, useRef } from "react";
import { Element } from "react-scroll";
import { Reveal } from "../Reveal";
import "./Portfolio.css";

// Importing images
import billboard1 from "../../assets/Portfolio/billboard-northpoint.jpg";
import billboard2 from "../../assets/Portfolio/billboard-northpoint2.jpg";
import billboard3 from "../../assets/Portfolio/billboard-tokaiestate.jpg";
import billboard4 from "../../assets/Portfolio/billboards-001.jpg";

const products = [
    {
        id: 1,
        name: "Northpoint Campaign",
        image: billboard1,
        title: "Northpoint City",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo tellus sed velit ultricies, sed tempus nisi dapibus.",
    },
    {
        id: 2,
        name: "Northpoint Phase 2",
        image: billboard2,
        title: "Urban Living",
        description:
            "Suspendisse potenti. Praesent ultrices lorem id arcu volutpat, non efficitur ex porttitor. Integer in lacinia lorem.",
    },
    {
        id: 3,
        name: "Tokai Estate",
        image: billboard3,
        title: "Tokai Estate",
        description:
            "Nullam et risus a magna vestibulum aliquam. Quisque suscipit augue at leo euismod, vitae luctus enim tincidunt.",
    },
    {
        id: 4,
        name: "Billboard Series",
        image: billboard4,
        title: "City Series",
        description:
            "Curabitur a ligula in mi tempor egestas. Vivamus ornare nisl sit amet mauris eleifend, a pretium nunc efficitur.",
    },
];

export default function Portfolio() {
    const [activeId, setActiveId] = useState(null);
    const [styleState, setStyleState] = useState({});
    const cardRefs = useRef({});

    const handleCardClick = (id) => {
        if (activeId === id) {
            handleClose();
            return;
        }

        const card = cardRefs.current[id];
        if (!card) return;

        // 1. Measure position
        const rect = card.getBoundingClientRect();

        // 2. Calculate distance to center
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const moveX = centerX - cardCenterX;
        const moveY = centerY - cardCenterY;

        // 3. Calculate scale
        const targetWidth = window.innerWidth * 0.6;
        const finalWidth = Math.min(targetWidth, 1000);
        const scale = finalWidth / rect.width;

        // 4. Apply styles (transform + high z-index)
        setStyleState({
            [id]: {
                transform: `translate(${moveX}px, ${moveY}px) scale(${scale})`,
                zIndex: 1000,
                boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.8)", // Apply shadow instantly
            },
        });

        setActiveId(id);
    };

    const handleClose = () => {
        if (!activeId) return;

        const idToClose = activeId;

        // 1. Modify style: Remove transform (so it slides back) but KEEP zIndex/shadow high
        setStyleState({
            [idToClose]: {
                transform: "none", // Reset transform to trigger CSS transition back to grid
                zIndex: 1000, // Keep on top during exit
                boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.8)", // Keep shadow during exit
            },
        });

        setActiveId(null);

        // 2. Full cleanup after the CSS transition (0.6s) finishes
        setTimeout(() => {
            setStyleState({});
        }, 600);
    };

    return (
        <Reveal>
            <Element name="portfolio" className="portfolio-section">
                <div className="portfolio-container">
                    <h2 className="section-title">Our Portfolio</h2>

                    <div
                        className={`portfolio-grid ${
                            activeId ? "has-active" : ""
                        }`}
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                ref={(el) =>
                                    (cardRefs.current[product.id] = el)
                                }
                                className={`portfolio-card ${
                                    activeId === product.id ? "active" : ""
                                } ${
                                    activeId && activeId !== product.id
                                        ? "inactive"
                                        : ""
                                }`}
                                onClick={() => handleCardClick(product.id)}
                                // Use styleState[id] if it exists, otherwise empty.
                                // This ensures the closing style persists even after activeId is null.
                                style={styleState[product.id] || {}}
                            >
                                <div className="card-image-wrapper">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="card-image"
                                    />
                                    <div className="card-overlay"></div>
                                </div>

                                <div className="card-content">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        className={`portfolio-backdrop ${
                            activeId ? "visible" : ""
                        }`}
                        onClick={handleClose}
                    />
                </div>
            </Element>
        </Reveal>
    );
}
