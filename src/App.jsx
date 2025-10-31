import { PrimeReactProvider } from "primereact/api";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
    return (
        <PrimeReactProvider>
            <Navbar />
            <Home />
            <About />
            <Stats />
            <Portfolio />
            <Contact />
        </PrimeReactProvider>
    );
}
