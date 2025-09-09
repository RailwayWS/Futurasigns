import { PrimeReactProvider } from 'primereact/api';
import { Link, Element } from "react-scroll";
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import placeholder1 from './assets/Placeholders/ph1.jpeg'
import ad from './assets/ad.png'
import create from './assets/creativity.png'
import relocate from './assets/relocation.png'
import trust from './assets/trust.png'
import location_pin from './assets/location_pin.png'
import email_logo from './assets/email.png'
import phone_logo from './assets/phone.png'
import car from './assets/car.png'
import calendar from './assets/calendar(1).png'
import group from './assets/group.png'

// Portfolio images
import billboard1 from './assets/Portfolio/billboard-northpoint.jpg';
import billboard2 from './assets/Portfolio/billboard-northpoint2.jpg';
import billboard3 from './assets/Portfolio/billboard-tokaiestate.jpg';
import billboard4 from './assets/Portfolio/billboards-001.jpg';
import billboard5 from './assets/Portfolio/billboards-002.jpg';
import billboard6 from './assets/Portfolio/billboards-003.jpg';
import billboard7 from './assets/Portfolio/factory-signage-elliot-avenue.jpg';
import billboard8 from './assets/Portfolio/factory-signage-tigerbrands.jpg';
import billboard9 from './assets/Portfolio/futura-billboards-01.jpg';
import billboard10 from './assets/Portfolio/large-format-cadiz.jpg';
import billboard11 from './assets/Portfolio/office-signage-aintree-park.jpg';
import billboard12 from './assets/Portfolio/office-signage-excellerate.jpg';
import billboard13 from './assets/Portfolio/office-signage-northlink-collge.jpg';
import billboard14 from './assets/Portfolio/office-signage-paardevlei.jpg';
import billboard15 from './assets/Portfolio/office-signage-stonethree.jpg';
import billboard16 from './assets/Portfolio/office-signage-xeon.jpg';
import billboard17 from './assets/Portfolio/signage-001.jpg';
import billboard18 from './assets/Portfolio/vehicle-signage-alplas.jpg';
import billboard19 from './assets/Portfolio/vehicle-signage-groote-post.jpg';
import billboard20 from './assets/Portfolio/vehicle-signage-llevell.jpg';
import billboard21 from './assets/Portfolio/vehicle-signage-mokwena.jpg';
import billboard22 from './assets/Portfolio/vehicle-signage-penflex.jpg';
import billboard23 from './assets/Portfolio/vehicle-signage-sawelding.jpg';




export default function App() {
  return (
    <PrimeReactProvider>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
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
        <p>Established in 1986, Futura Signs is Cape Town’s trusted partner for large-format billboards and custom signboards.  We listen first, then deliver tailored solutions that help your brand stand out. Our in-house team designs, manufactures and installs everything from high-impact roadside billboards to professional on-site development boards, indoor branding, vehicle graphics and banners. Over the years we’ve produced and installed billboards and full campaigns for major property developments, golf estates, wine farms, retail centres, corporate brands and other leading ventures across the Western Cape. <br/> <br/>From concept, engineering and council approvals to fabrication, project management and safe on-site installation, we handle the entire process end-to-end—on time and to spec. Whether you need a single billboard or a multi-site rollout, expect quality materials, precise workmanship and a reliable finish that thrives in Cape Town’s conditions.</p>
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
      <div className='about-spacing'>
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
    </div>
      

      <div className='stats-spacing'>
        <h2>Did you know?</h2>
        <div className='stats-container'>

          <div className='stats-card'>
            <img src={car} alt="stats image" />
            <div className='stats-info'>
              <div className='stats-big'>37%</div>
              <div className='stats-desc'>of drivers notice billboards</div>
            </div>
          </div>

          <div className='stats-card'>
            <img src={calendar} alt="stats image" />
            <div className='stats-info'>
              <div className='stats-big'>2 Million</div>
              <div className='stats-desc'>monthly impressions from passing vehicles</div>
            </div>
          </div>

          <div className='stats-card'>
            <img src={group} alt="stats image" />
            <div className='stats-info'>
              <div className='stats-big'>74%</div>
              <div className='stats-desc'>of the urban population notice outdoor ads</div>
            </div>
          </div>
        </div>
        <p> Billboards aren’t just ads — they’re a statement. They work like word of mouth, leaving a strong and lasting impression that digital noise can’t match. In a world where anyone can post online for free, a billboard shows you’re serious, established, and ready to be seen. It’s the old-school, authentic way to prove your brand is the real deal.</p>
      </div>
        

    </Element>
  );
}

const products = [
  { name: 'Billboard 1', image: billboard1 },
  { name: 'Billboard 2', image: billboard2 },
  { name: 'Billboard 3', image: billboard3 },
  { name: 'Billboard 4', image: billboard4 },
  { name: 'Billboard 5', image: billboard5 },
  { name: 'Billboard 6', image: billboard6 },
  { name: 'Billboard 7', image: billboard7 },
  { name: 'Billboard 8', image: billboard8 },
  { name: 'Billboard 9', image: billboard9 },
  { name: 'Billboard 10', image: billboard10 },
  { name: 'Billboard 11', image: billboard11 },
  { name: 'Billboard 12', image: billboard12 },
  { name: 'Billboard 13', image: billboard13 },
  { name: 'Billboard 14', image: billboard14 },
  { name: 'Billboard 15', image: billboard15 },
  { name: 'Billboard 16', image: billboard16 },
  { name: 'Billboard 17', image: billboard17 },
  { name: 'Billboard 18', image: billboard18 },
  { name: 'Billboard 19', image: billboard19 },
  { name: 'Billboard 20', image: billboard20 },
  { name: 'Billboard 21', image: billboard21 },
  { name: 'Billboard 22', image: billboard22 },
  { name: 'Billboard 23', image: billboard23 }
];


const responsiveOptions = [
  { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
  { breakpoint: '768px', numVisible: 2, numScroll: 1 },
  { breakpoint: '560px', numVisible: 1, numScroll: 1 }
];

const productTemplate = (product) => (
  <div className='product-item'>
    <img src={product.image} alt={product.name} />
  </div>
);

function Portfolio() {
  return (
    <Element name='portfolio' className='portfolio-container'>
      <h2>Our Portfolio</h2>
      <Carousel
        value={products}
        numScroll={3}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
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
    );
}
