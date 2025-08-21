import { PrimeReactProvider } from 'primereact/api';
import { Link, Element } from "react-scroll";
import { Button } from 'primereact/button';

export default function App() {
  return (
    <PrimeReactProvider>
      <Navbar />
    </PrimeReactProvider>
  );
}

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="home"smooth={true} duration={500} className="link-item">Home</Link>
        <Link to="about" smooth={true} duration={500} className="link-item">About</Link>
        <Link to="services" smooth={true} duration={500} className="link-item">Services</Link>
        <Link to="portfolio" smooth={true} duration={500} className="link-item">Portfolio</Link>
        <Link to="contact" smooth={true} duration={500} className="link-item"> <Button label="Contact Us" rounded /> </Link>
      </div>
    </nav>
  );
}
