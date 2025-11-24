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
            <Reveal shouldAnimate={isLoaded}>
                <div className="hero-info">
                    <h1>Your Trusted Signage Partner in Cape Town</h1>
                    <div className="hero-buttons">
                        <button>See our work</button>
                        <button className="button-invert">Find us</button>
                    </div>
                </div>
            </Reveal>
        </Element>
    );
}
