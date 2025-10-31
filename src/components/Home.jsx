import { Element } from "react-scroll";
import placeholder1 from "../assets/Placeholders/ph1.jpeg";
import { Reveal } from "./Reveal";
import TextType from "./TextType/TextType";
import background from "../assets/background.jpg";

export default function Home() {
    return (
        <>
            <Element name="home" className="hero-container">
                <div
                    className="hero-background"
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <Reveal>
                    <div className="hero-info">
                        <h1>Your Trusted Signage Partner in Cape Town</h1>
                        <div className="hero-buttons">
                            <button>See our work</button>
                            <button className="button-invert">Find us</button>
                        </div>
                    </div>
                </Reveal>
            </Element>
        </>
    );
}
