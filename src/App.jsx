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
            links: [],
        },
        {
            label: "Portfolio",
            bgColor: "#1a2730",
            textColor: "#fff",
            links: [],
        },
        {
            label: "Contact Us",
            bgColor: "#24333c",
            textColor: "#fff",
            links: [],
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
