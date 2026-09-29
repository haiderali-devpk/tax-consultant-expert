import ScrollAnimation from "../Animations/ScrollAnimation";
import './WhyChooseUS.scss';
import {
  MdOutlineVerifiedUser,
  MdPersonOutline,
  MdSecurity,
  MdSupportAgent,
} from "react-icons/md";

const whyChooseUs = [
  {
    id: 1,
    icon: MdOutlineVerifiedUser,
    title: "Expert Guidance",
    description: "Professional tax advice tailored to your financial needs.",
  },
  {
    id: 2,
    icon: MdPersonOutline,
    title: "Personalized Service",
    description: "Solutions designed around your unique personal or business situation.",
  },
  {
    id: 3,
    icon: MdSecurity,
    title: "Reliable & Accurate",
    description: "We focus on accuracy, compliance, and keeping your tax matters organized.",
   },
  {
    id: 4,
    icon: MdSupportAgent,
    title: "Ongoing Support",
    description: "Clear communication and dependable support whenever you need us.",
  },
];

const WhyChooseUSdetail = () => {
  return (
    <section className='whychooseus'>
      <ScrollAnimation animation="fadeUp">
      <div className="container mt-3">
        <h2 id='whychoose-heading'>Why Choose Us for Your Tax Needs?</h2>
        <p id='whychoose-para'>
          We make tax matters simple, accurate, and stress-free, helping individuals <br /> 
          and businesses stay compliant and make informed financial decisions.
        </p>

        <hr />

        <div className="row">
          {whyChooseUs.map((item) => {
            const Icon = item.icon;

            return (
              <div className="col-6 col-lg-3" key={item.id}>
                <div>
                  <div className="whychoosecard">
                  <div className="whychooseus-top">
                    <div className="whychoose-icon">
                  <Icon />
                  </div>
                  </div>
                  <h3 id='whychoose-headings'>{item.title}</h3>
                  <p id='servicebox-d'>{item.description}</p>
                </div>
              </div>
              </div>
            );
          })}
          
        </div>
      </div>
      </ScrollAnimation>
    </section>
  );
};

export default WhyChooseUSdetail;