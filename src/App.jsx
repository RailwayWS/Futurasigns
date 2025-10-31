import { PrimeReactProvider } from "primereact/api";
import CardNav from "./components/CardNav/CardNav";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import trust from "./assets/trust.png";

export default function App() {
    const navItems = [
        {
            label: "Home",
            bgColor: "#101b24",
            textColor: "#fff",
            scrollTo: "home",
            links: [],
        },
        {
            label: "About",
            bgColor: "#1a2730",
            textColor: "#fff",
            scrollTo: "about",
            links: [],
        },
        {
            label: "Stats",
            bgColor: "#24333c",
            textColor: "#fff",
            scrollTo: "stats",
            links: [],
        },
        {
            label: "Portfolio",
            bgColor: "#2e3f48",
            textColor: "#fff",
            scrollTo: "portfolio",
            links: [],
        },
        {
            label: "Contact",
            bgColor: "#384b54",
            textColor: "#fff",
            scrollTo: "contact",
            links: [],
            isButton: true,
        },
    ];

    return (
        <PrimeReactProvider>
            <CardNav
                logo={trust}
                logoAlt="Futurasigns Logo"
                items={navItems}
                baseColor="#fff"
                menuColor="#101b24"
                buttonBgColor="#101b24"
                buttonTextColor="#fff"
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
