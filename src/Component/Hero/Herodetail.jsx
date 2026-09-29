import { Typewriter } from "react-simple-typewriter";
import WhatsAppTemp from "../Button/WhatsAppTemp";
import Hero from "@/assets/image/hero.jpg";
import "./Hero.scss";
const Herodetail = () => {
  return (
    <>
      <section id="hero">
        <div className="container"id="Container">
        <div className="row">
          <div className="col-12 col-md-6">
            <span id="hero-upper-text" className="fs-6">Trusted Tax & Financial Experts</span>
            <h2 id="hero-main">Smart Tax Solutions. Better Financial Decisions.</h2>
            <p id="hero-lower-text"><Typewriter words={[
              "Professional tax planning, accounting, and advisory services tailored to your business."]} loop={true} cursor cursorStyle="|" typeSpeed={50} deleteSpeed={20} delaySpeed={5000}/></p>
            
            <p id="img-text" className="bg-primary">Smart Tax <br />Better Future</p>
            
            <div className="d-flex justify-content-start gap-2 mb-4 align-items-center">
              <span id="whatsaap-btn"><WhatsAppTemp /></span> 
            <a className="btn btn-success" href="#services" role="button" id="service-bnt">Services</a>
            </div>
            
          </div>

          <div className="col-12 col-md-6">
            <img src={Hero} alt="Hero" id="hero-img" className="my-2"/>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Herodetail
