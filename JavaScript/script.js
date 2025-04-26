/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== ACTIVE LINK BEHAVIOUR FOR HOME AND CONTACT ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const contactSection = document.querySelector('#contact');
    const homeLink = document.querySelector('.nav__link[href="#"]');
    const contactLink = document.querySelector('.nav__link[href="#contact"]');

    // Function to remove active class from all links
    const removeActiveClass = () => {
        navLinks.forEach(link => link.classList.remove('active-link'));
    };

    // Function to update active link based on scroll position
    const updateActiveLink = () => {
        const scrollPosition = window.scrollY + 200; // Offset to adjust when the section is considered "in view"
        const contactSectionTop = contactSection ? contactSection.offsetTop : Infinity;

        if (scrollPosition >= contactSectionTop) {
            removeActiveClass();
            contactLink.classList.add('active-link');
        } else {
            removeActiveClass();
            homeLink.classList.add('active-link');
        }
    };

    // Run on page load to set the correct active link (important for navigating from other pages)
    updateActiveLink();

    // Add click event to Contact link for smooth scrolling
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
});