import { PrimeReactProvider } from "primereact/api";
import CardNav from "./components/CardNav/CardNav";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import logo from "./assets/logo.png";

export default function App() {
    const navItems = [
        {
            label: "About",
            bgColor: "#101b24",
            textColor: "#fff",
            links: [
                {
                    label: "Read More",
                    scrollTo: "about",
                    ariaLabel: "Read more about us",
                },
                {
                    label: "Statistics",
                    scrollTo: "stats",
                    ariaLabel: "View our statistics",
                },
            ],
        },
        {
            label: "Portfolio",
            bgColor: "#1a2730",
            textColor: "#fff",
            links: [
                {
                    label: "Our Work",
                    scrollTo: "portfolio",
                    ariaLabel: "View our portfolio",
                },
            ],
        },
        {
            label: "Where To Find Us",
            bgColor: "#24333c",
            textColor: "#fff",
            links: [
                {
                    label: "Address",
                    ariaLabel: "View our address on Google Maps",
                    isExternal: true,
                },
                {
                    label: "Email",
                    ariaLabel: "Send us an email",
                    isExternal: true,
                },
            ],
        },
    ];
    return (
        <PrimeReactProvider>
            <CardNav
                logo={logo}
                logoAlt="Futurasigns Logo"
                items={navItems}
                baseColor="#fff"
                menuColor="#101b24"
                buttonBgColor="#101b24"
                buttonTextColor="#fff"
                buttonLabel="Contact Us"
                buttonScrollTo="contact"
                ease="power3.out"
            />
            <Home />
            <About />
            <Stats />
            <Portfolio />
            <Contact />
        </PrimeReactProvider>
    );
}
