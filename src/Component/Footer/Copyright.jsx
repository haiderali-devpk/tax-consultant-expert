import { IoDocumentsSharp } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { FaBalanceScaleLeft } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FaIdCard } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Copyright.scss";
export const Copyright = () => {
  const year=new Date().getFullYear();
 
  return (
    <>
      <div className="container-fluid bg-primary text-white py-3">
        <div className="row">

          <div className="col-6 col-md-3 mb-3 mb-md-0">
            <div className="footer-brand ps-2 ">
            <h5>Adv. Babar & Co.</h5>
            <p className="mb-0">Professional tax and accounting solutions</p>
            <p className="mb-1">for individuals and businesses.</p>
            </div>
            </div>

             <div className="col-6 col-md-3 mb-3 mb-md-0">
            <div className="footer-brand ps-2 ">
            <h5>Explore</h5>
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            <a className="nav-link" href="/#services">Service</a>
            <a className="nav-link" href="/#about">About</a>
            <a className="nav-link" href="/#contact">Contact</a>
            <Link className="nav-link" to="/tax-calculation">Tax Calculation</Link>
            </div>
            </div>

             <div className="col-6 col-md-3 mb-3 mb-md-0">
            <div className="footer-brand ps-2 ">
            <h5>Our Services</h5>
            <p className="mb-0"><FaIdCard /> NTN Registration</p>
            <p className="mb-0"><CgNotes /> Accounting & Bookkeeping</p>
            <p className="mb-0"><IoDocumentsSharp /> Income Tax Return Filing</p>
            <p className="mb-0"><FiHome /> Property TAx Services</p>
            <p className="mb-0"><FaFileInvoice />Sales Tax Registration</p>
            <p className="mb-0"><FaBalanceScaleLeft /> Legal Consultancy</p>
            </div>
            </div>

             <div className="col-6 col-md-3 mb-3 mb-md-0">
            <div className="footer-brand ps-2 ">
            <h5>Contact Us</h5>
            <address className="contact-info"> <FaLocationDot /> Office: Regency Rd, FSD.
            <p className="mb-0"><IoCall /> Phone: <a href="tel:03039486040" className="text-white text-decoration-none">+92 303 9486040</a></p>
            <p className="email"><MdEmail /> Email: <a href="mailto:babarnaveed764@gmail.com" className="text-decoration-none text-white"> babarnaveed764@gmail.com</a></p>
            </address>
            </div>
            </div>
            
            </div>
            <hr className="border-light my-3" />
            <div className="row">
          <div className="col text-center">
            <p className="mb-0">&copy; {year} Adv. Babar & Co. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </>
  )
}