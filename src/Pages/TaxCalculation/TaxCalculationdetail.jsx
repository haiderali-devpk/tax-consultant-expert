import { BsFileEarmarkText } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa"
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import './TaxCalculation.scss'
import Tax from "../../Tax";
const TaxCalculationdetail = () => {

  const [income, setIcome] = useState("");
  const [deduction, setDeduction] = useState(0);
  const [incomeTax, setIncomeTax] = useState(0);
  const totaltax = Number(income) - Number(deduction || 0);
  
  const handleClicker = () => {
  let tax = 0;

  if (totaltax > 600000 && totaltax <= 1200000) {
    tax = (totaltax - 600000) * 0.01;
  } 
  else if (totaltax > 1200000 && totaltax <= 2200000) {
    tax = 6000 + (totaltax - 1200000) * 0.11;
  } 
  else if (totaltax > 2200000 && totaltax <= 3200000) {
    tax = 116000 + (totaltax - 2200000) * 0.20;
  } 
  else if (totaltax > 3200000 && totaltax <= 4100000) {
    tax = 316000 + (totaltax - 3200000) * 0.25;
  }
  else if (totaltax > 4100000 && totaltax <= 5600000) {
    tax = 541000 + (totaltax - 4100000) * 0.29;
  }
  else if (totaltax > 5600000 && totaltax <= 7000000) {
    tax = 976000 + (totaltax - 5600000) * 0.32;
  }
  else if (totaltax > 7000000) {
    tax = 1424000 + (totaltax - 7000000) * 0.35;
  }

  setIncomeTax(tax);
};

  return (
    <section className="section-tax" id="tax-section">
      <div className="container-fluid">
        <div className="row align-items-stretch">
          <div className="col-12" id='tax-background'>

            <span id='tax-calculate'>Tax Calculator</span>
            <h2 id='taxcalculate-heading'>Calculate Your Tax Liability</h2>
            <p id='taxcalculate-para'>Estimate your annual tax liability in just a few simple steps.<br id='br-line'/> Get accurate results based on the latest tax rates and rules.</p>

          </div>

          <div className="col-12 col-md-6 mt-5 d-flex">
            
            <div className="tax-form w-100" id="tax-form">             
              <h2 id="taxform-heading"><BsInfoCircle id="this-icon"/> Your Information</h2>
           
           <label htmlFor="annualIncome" id="anuualincome-text">Annual Income</label>
           <input type="number" id="annualIncome" className="form-control" placeholder="Enter Annual Income" value={income} onChange={(e)=>{setIcome(e.target.value)}}/>
           
           <label htmlFor="deduction" id="deducation-texts">Deducations (PKR)</label>
           <input type="number" id="deduction" className="form-control" placeholder="Enter Deduction Amount" value={deduction} onChange={(e)=>{setDeduction(e.target.value)}} />
           <button className="btn btn-success" id="taxform-btn" onClick={handleClicker}><FaCalculator id="taxtform-icon"/> Calculate Tax</button>
            </div>


            </div>
            <div className="col-12 col-md-6 mt-5 d-flex">
              <div id="summary-box">
                <h2 id="taxsummary-heading">
                  <BsFileEarmarkText />Tax Summary
                </h2>

                <p className="summarybox-para">Annual Income <span className="summarybox-span">Rs. {income || 0}</span></p>
                <p className="summarybox-para">Total Deduction <span className="summarybox-span">Rs. {deduction || 0}</span></p>
                <p className="summarybox-para">Taxable Income <span className="summarybox-span"> Rs. {totaltax}</span></p>

                <div id="Extimate-Tax">
                  <h2>Estimate Tax</h2>
                  <h2>Rs. {Math.round (incomeTax)}</h2>
                </div>

                <div className="extimate-calculate">
                  <p>
                    <span><BsInfoCircle /></span>This is an estimated calculation based on the current tax slabs
                    and may vary based on your specific situation and applicable laws.
                  </p>
              </div>
            </div>
            </div>
            <div className="col-12">
              <Tax />
            </div>
            
        </div>
      </div>
      
    </section>
  )
}

export default TaxCalculationdetail
