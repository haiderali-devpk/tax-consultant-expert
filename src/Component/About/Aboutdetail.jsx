import ScrollAnimation from "../Animations/ScrollAnimation";
import { MdSentimentSatisfiedAlt } from "react-icons/md";;
import { GrUserExpert } from "react-icons/gr";
import { ImHappy } from "react-icons/im";

import "./About.scss";

const Aboutdetail = () => {
  return (
    <section className="section-about" id="about">
      <ScrollAnimation animation="fadeUp">
      <div className="container">

        <h2 id="about-heading">About Us</h2>

        <h3 id="about-hd2">Your Partner in Tax Success</h3>

        <p id="about-para">
          We are a team of experienced tax professionals dedicated to providing
          reliable, transparent, <br /> and personalized tax solutions.Our goal is to
          make your tax journey simple and stress-free.
        </p>
        <hr />

        <div className="row" id="about-direction">

          <div className="col-4" id="about-line">
            <GrUserExpert className="about-icon" />
            <h3>03+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="col-4" id="about-line">
            <ImHappy className="about-icon" />
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="col-4">
            <MdSentimentSatisfiedAlt className="about-icon" />
            <h3>99%</h3>
            <p>Client Satisfaction</p>
          </div>

        </div>

      </div>
      </ScrollAnimation>
    </section>
  );
};

export default Aboutdetail;

