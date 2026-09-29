import './Contact.scss'
import ScrollAnimation from "../Animations/ScrollAnimation";
import contact from '@/assets/image/contact.png'
const Contactdetail = () => {
  return (
    <section id='contact' className='section-contact'>
      <ScrollAnimation animation="fadeUp">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-12 col-md-6 col-lg-6">
            <p id='contact-touch'>Get in Touch</p>
            <h3 className='contact-heading'>Let’s Take Care of Your Tax Needs</h3>
            <p className='contact-para'>Have questions about your taxes or accounting? Our team is here to provide clear, professional guidance and help you find the right solution for your needs.</p>
            <h4 className='contact-heading'>Your Trusted Tax Partner</h4>
            <p className='contact-para'>Get reliable tax support from experienced professionals who are committed to making your tax journey simple and stress-free.</p>
            <a
              href="https://wa.me/3039486040" target="_blank" rel="noopener noreferrer" id="contact-us">
              Contact Us →
              </a>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
          <img src={contact} alt="team-image"  id='contact-image'/>
          <a
              href="https://wa.me/3039486040" target="_blank" rel="noopener noreferrer" id="contact-uss">
              Contact Us →
              </a>
          </div>
          
        </div>
      </div>
      </ScrollAnimation>
    </section>
  )
}

export default Contactdetail
