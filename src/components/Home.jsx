import { Element } from "react-scroll";
import Reveal from "./Reveal";
import background from "../assets/background2.jpg";

export default function Home({ isLoaded }) {
    return (
        <Element name="home" className="hero-container">
            <div
                className="hero-background"
                style={{ backgroundImage: `url(${background})` }}
            />
            {/* Removed isLoaded check for simpler reveal logic, add back if needed */}
            <Reveal>
                <div className="hero-info">
                    <h1>Your Trusted Signage Partner in Cape Town</h1>
                    <div className="hero-buttons">
                        <button className="button-primary">See our work</button>
                        <button className="button-invert">Find us</button>
                    </div>
                </div>
            </Reveal>
        </Element>
    );
}
