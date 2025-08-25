import { PrimeReactProvider } from 'primereact/api';
import { Link, Element } from "react-scroll";
import { Button } from 'primereact/button';
import placeholder1 from './assets/Placeholders/ph1.jpeg'

export default function App() {
  return (
    <PrimeReactProvider>
      <Navbar />
      <Home />
    </PrimeReactProvider>
  );
}

function Navbar() {
  return (
    <nav>
      <div className='nav-container'>
        <Link to="home" smooth={true} duration={500} className="link-item">Home</Link>
        <Link to="about" smooth={true} duration={500} className="link-item">About</Link>
        <Link to="services" smooth={true} duration={500} className="link-item">Services</Link>
        <Link to="portfolio" smooth={true} duration={500} className="link-item">Portfolio</Link>
        <Link to="contact" smooth={true} duration={500} className="link-item"> <Button label="Contact Us" rounded /> </Link>
      </div>
    </nav>
  );
}

function Home(){
  return (
    <div className='hero-container'>
      <div className='hero-info'>
        <h1>We listen & deliver custom solutions to your business.</h1>
        <p>Established in 1986, Futura Signs focusses on supplying and installing large billboards and signboards for property developments. Over the years we have manufactured and installed billboards for many property developments, we have also handled several billboard campaigns for signature golf estates and other major property ventures.</p>
        <div className='hero-buttons'>
          <button> Schedule a call</button>
          <button className='button-invert'> Download Pricing</button>
        </div>
      </div>
      <img src={placeholder1} alt="hero image" />
    </div>
  );
}
