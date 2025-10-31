import { Element } from "react-scroll";
import placeholder1 from "../assets/Placeholders/ph1.jpeg";
import { Reveal } from "./Reveal";

export default function Home() {
    return (
        <Reveal>
            <Element name="home" className="hero-container">
                <div className="hero-info">
                    <h1>Your Trusted Signage Partner in Cape Town</h1>
                    <p>
                        Established in 1986, Futura Signs is Cape Town's trusted
                        partner for large-format billboards and custom
                        signboards. We listen first, then deliver tailored
                        solutions that help your brand stand out. Our in-house
                        team designs, manufactures and installs everything from
                        high-impact roadside billboards to professional on-site
                        development boards, indoor branding, vehicle graphics
                        and banners. Over the years we've produced and installed
                        billboards and full campaigns for major property
                        developments, golf estates, wine farms, retail centres,
                        corporate brands and other leading ventures across the
                        Western Cape. <br /> <br />
                        From concept, engineering and council approvals to
                        fabrication, project management and safe on-site
                        installation, we handle the entire process end-to-end—on
                        time and to spec. Whether you need a single billboard or
                        a multi-site rollout, expect quality materials, precise
                        workmanship and a reliable finish that thrives in Cape
                        Town's conditions.
                    </p>
                    <div className="hero-buttons">
                        <button> See our work</button>
                        <button className="button-invert"> Find us</button>
                    </div>
                </div>

                <img src={placeholder1} alt="hero image" />
            </Element>
        </Reveal>
    );
}
