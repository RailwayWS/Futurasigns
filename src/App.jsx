import { PrimeReactProvider } from 'primereact/api';
import { Link, Element } from "react-scroll";
import { Button } from 'primereact/button';
import placeholder1 from './assets/Placeholders/ph1.jpeg'
import ad from './assets/ad.png'
import create from './assets/creativity.png'
import relocate from './assets/relocation.png'
import trust from './assets/trust.png'
import location_pin from './assets/location_pin.png'
import email_logo from './assets/email.png'
import phone_logo from './assets/phone.png'

export default function App() {
  return (
    <PrimeReactProvider>
      <Navbar />
      <Home />
      <About />
        <Contact />
    </PrimeReactProvider>
  );
}

function Navbar() {
  return (
    <nav>
      <div className='nav-container'>
        <Link to="home" smooth={true} duration={500} className="link-item">Home</Link>
        <Link to="about" smooth={true} duration={500} className="link-item">About</Link>
        <Link to="portfolio" smooth={true} duration={500} className="link-item">Portfolio</Link>
        <Link to="contact" smooth={true} duration={500} className="link-item"> <Button label="Contact Us" rounded /> </Link>
      </div>
    </nav>
  );
}

function Home(){
  return (
    <Element name='home' className='hero-container'>
      <div className='hero-info'>
        <h1>Your Trusted Signage Partner in Cape Town</h1>
        <p>Established in 1986, Futura Signs is Cape Town’s trusted partner for large-format billboards and custom signboards.  We listen first, then deliver tailored solutions that help your brand stand out. Our in-house team designs, manufactures and installs everything from high-impact roadside billboards to professional on-site development boards, indoor branding, vehicle graphics and banners. Over the years we’ve produced and installed billboards and full campaigns for major property developments, golf estates, wine farms, retail centres, corporate brands and other leading ventures across the Western Cape. From concept, engineering and council approvals to fabrication, project management and safe on-site installation, we handle the entire process end-to-end—on time and to spec. Whether you need a single billboard or a multi-site rollout, expect quality materials, precise workmanship and a reliable finish that thrives in Cape Town’s conditions.</p>
        <div className='hero-buttons'>
          <button> See our work</button>
          <button className='button-invert'> Find us</button>
        </div>
      </div>
      <img src={placeholder1} alt="hero image" />
    </Element>
  );
}

function About(){
  return (
    <Element name='about' className='about-container'>
      <div className='about-heading'>
        <h2> About us</h2>
        <div className='about-text'>Futura Signs has been turning heads since 1986</div>
      </div>
      <div className='about-info'>
        <div className='about-card'>
          <img src={ad} alt="ad" />
          <div className='card-heading'>Buildboards Built to Last</div>
          <div className='card-text'>
            We are specialists in billboards — it’s our passion and our craft. From design to fabrication to installation, we build billboards that are made to last. Over the decades, we've become a trusted name in outdoor advertising, known for structures that stand the test of time.
          </div>
        </div>

         <div className='about-card'>
          <img src={relocate} alt="ad" />
          <div className='card-heading'>Relocation & <br/>Refurbishment Services</div>
          <div className='card-text'>
            For our long-term clients, we offer a unique service: billboard relocation and refurbishment. We'll carefully dismantle your billboard, store it securely, and give it a new lease on life at a fresh location — a rare offering in our industry.
          </div>
        </div>

         <div className='about-card'>
          <img src={create} alt="ad" />
          <div className='card-heading'>Custom Signage Solutions</div>
          <div className='card-text'>
            While billboards are our bread and butter, we also create a wide range of custom signage. If you need it, just ask — chances are, we can make it.
          </div>
        </div>

         <div className='about-card'>
          <img src={trust} alt="ad" />
          <div className='card-heading'>Your Trusted Signage Partner</div>
          <div className='card-text'>
            We’re a vibrant, experienced team that believes in doing great work and building lasting relationships. With a reputation for quality craftsmanship, excellent client service, and competitive pricing, Futura Signs is your reliable signage partner in Cape Town and beyond.
          </div>
        </div>
        
      </div>
      <div className='about-text'>Let’s build something bold together. <br/>
                                  In fact, let's build this country!</div>
    </Element>
  );
}

function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Element name='contact' className='contact-container'>
            <div className='contact-info'>
                <div className='contact-card'>
                    <img src={location_pin} alt="pin"/>
                    <h3> Address</h3>
                    <p>9 Printers Way, Marconi Beam, Cape Town, 7447</p>
                </div>
                <div className='contact-card'>
                    <img src={email_logo} alt="email logo"/>
                    <h3> Email </h3>
                    <p>futurasales@mweb.co.za</p>
                </div>
                <div className='contact-card'>
                    <img src={phone_logo} alt="phone logo"/>
                    <h3> Call Us </h3>
                    <p>021 551 1814</p>
                </div>
            </div>

            <form className='contact-form' action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="31154c19-76f9-4b6b-a4ba-8aa9f8ac3a6c"/>

                <h2> Contact Us</h2>
                <input
                    type='text'
                    name="full-name"
                    placeholder="Name and Surname"
                />

                <input
                    type='email'
                    name="email"
                    placeholder="Your Email Address"
                />

                <textarea
                    type="text"
                    name="message"
                    placeholder="Message..."
                />

                <button> Send</button>
            </form>
        </Element>
    )
}
