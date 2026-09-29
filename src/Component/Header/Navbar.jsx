import WhatsAppTemp from "../Button/WhatsAppTemp";
import "./Navbar.scss";
import logo from "@/assets/image/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-0">
      <div className="container">
        
        <Link className="navbar-brand d-flex align-items-center justify=content-center" 
            to="/" > <img src={logo} alt="Adv. Babar & Co." className="navbar-logo me-2" /><span className="logo-name fw-bold">ADV. BABAR <br />& CO.</span>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
          <Link className="nav-link active" id="nav-link" aria-current="page" to="/">Home</Link>
        </li>

         <li className="nav-item">
          <a className="nav-link text-white" id="nav-link" href="/#services">Service</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="/#about" id="nav-link">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" id="nav-link" href="/#contact">Contact</a>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" id="nav-link" to="/tax-calculation">TaxCalculation</Link>
        </li>
          </ul>
        </div>

        <div className="d-none d-lg-block"> <WhatsAppTemp /> </div>
      </div>
    </nav>
  );
};