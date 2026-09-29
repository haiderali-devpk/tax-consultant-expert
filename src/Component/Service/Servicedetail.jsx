import ScrollAnimation from "../Animations/ScrollAnimation";
import { useContext } from "react";
import { ServiceContext } from "@/Context/ServiceContext";
import "./Service.scss";

const Servicedetail = () => {
  const { services } = useContext(ServiceContext);

  return (
    <section id="services" className="service-section">
      <ScrollAnimation animation="fadeUp">
      <div className="container">
        <h2 id="service-heading">Services </h2>
        <h3>Comprehensive Tax Services</h3>
        <p id="service-para">We offer a wide range of tax services to help individuals <br /> and businesses stay compliant and financially secure.</p>
        <hr />
        <div className="row">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                className="col-lg-4 col-md-6 col-12"
                key={service.id}
              >
                <div className="service-card">
                  <div className="service-top">
                  <div className="service-icon" id="icon">
                  <Icon />
                  </div>
                  </div>

                  <h3 id="sericebox-heading">{service.title}</h3>
                  <p id="servicebox-d">{service.description}</p>
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

export default Servicedetail;