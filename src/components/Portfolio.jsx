import { Element } from "react-scroll";
import { Carousel } from "primereact/carousel";
import { Reveal } from "./Reveal";
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
import { reverseEasing } from "framer-motion";
import { img } from "framer-motion/client";

const products = [
    { name: "Billboard 1", image: billboard1 },
    { name: "Billboard 2", image: billboard2 },
    { name: "Billboard 3", image: billboard3 },
    { name: "Billboard 4", image: billboard4 },
    { name: "Billboard 5", image: billboard5 },
    { name: "Billboard 6", image: billboard6 },
    { name: "Billboard 7", image: billboard7 },
    { name: "Billboard 8", image: billboard8 },
    { name: "Billboard 9", image: billboard9 },
    { name: "Billboard 10", image: billboard10 },
    { name: "Billboard 11", image: billboard11 },
    { name: "Billboard 12", image: billboard12 },
    { name: "Billboard 13", image: billboard13 },
    { name: "Billboard 14", image: billboard14 },
    { name: "Billboard 15", image: billboard15 },
    { name: "Billboard 16", image: billboard16 },
    { name: "Billboard 17", image: billboard17 },
    { name: "Billboard 18", image: billboard18 },
    { name: "Billboard 19", image: billboard19 },
    { name: "Billboard 20", image: billboard20 },
    { name: "Billboard 21", image: billboard21 },
    { name: "Billboard 22", image: billboard22 },
    { name: "Billboard 23", image: billboard23 },
];

const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
    { breakpoint: "768px", numVisible: 2, numScroll: 1 },
    { breakpoint: "560px", numVisible: 1, numScroll: 1 },
];

const productTemplate = (product) => (
    <div className="product-item">
        <img src={product.image} alt={product.name} />
    </div>
);

export default function Portfolio() {
    return (
        <Reveal>
            <Element name="portfolio" className="portfolio-container">
                <h2>Our Portfolio</h2>
                <Carousel
                    value={products}
                    numScroll={3}
                    numVisible={3}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
                />
            </Element>
        </Reveal>
    );
}
