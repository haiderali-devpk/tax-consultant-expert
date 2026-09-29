import WhatsAppTemp from '../Component/Button/WhatsAppTemp';
import './Tax.scss'
const TaxDetail = () => {

  const taxSlabs = [
  {
    id: 1,
    minIncome: 0,
    maxIncome: 600000,
    rate: 0,
    fixedTax: 0,
    description: "Up to Rs. 600,000",
  },
  {
    id: 2,
    minIncome: 600001,
    maxIncome: 1200000,
    rate: 0.01,
    fixedTax: 0,
    description: "Rs. 600,001 - Rs. 1,200,000",
  },
  {
    id: 3,
    minIncome: 1200001,
    maxIncome: 2200000,
    rate: 0.11,
    fixedTax: 6000,
    description: "Rs. 1,200,001 - Rs. 2,200,000",
  },
  {
    id: 4,
    minIncome: 2200001,
    maxIncome: 3200000,
    rate: 0.20,
    fixedTax: 116000,
    description: "Rs. 2,200,001 - Rs. 3,200,000",
  },
  {
    id: 5,
    minIncome: 3200001,
    maxIncome: 4100000,
    rate: 0.25,
    fixedTax: 316000,
    description: "Rs. 3,200,001 - Rs. 4,100,000",
  },
  {
    id: 6,
    minIncome: 4100001,
    maxIncome: Infinity,
    rate: 0.29,
    fixedTax: 541000,
    description: "Above Rs. 4,100,000",
  },
];

  return (
    <section className="sections-tax" id="tax-sections">
      <h2 id='tax-head'>Salaried Individuals Tax Slabs</h2>
      <table className='table table-bordered'>
      <thead>
        <tr id='taxtable-head'>
          <th>Income Range(PKR)</th>
          <th>Tax Rate</th>
          <th>Tax Amound</th>
        </tr>
      </thead>
      <tbody>
        {taxSlabs.map((slabs) => (
          <tr key={slabs.id}>
            <td>{slabs.description}</td>
            <td>{Math.round(slabs.rate * 100)}%</td>
            <td>Rs. {slabs.fixedTax.toLocaleString()}</td>
            </tr>
          ))}
          </tbody>
          </table>

          <div className="mt-5" id='tax-notes'>
            <h3 id='taxnotes-head'><span className='note-icons'>💡</span>Important Notes</h3>
            <p> <span className='note-icons'>✅</span>This calculator is for estimation purposes only.</p>
            <p><span className='note-icons'>✅</span>Actual tax liability may vary based on your specific circumstances.</p>
            <p><span className='note-icons'>✅</span>Includes applicable tax slabs, deductions and allowances as per current tax laws.</p>
            <p><span className='note-icons'>✅</span>For personalized advice, please consult our tax experts.</p>
          </div>

          <div className="Need-Help mt-3">
            <div>
              <h2 id='needhelp-heading'>Need Professional Help?</h2>
            <p id='needhelp-para'>Our tax experts are here to guide you and ensure you get the best possible advice for your situation.</p>
            </div>
            
            <div className='cta-button'>
            <WhatsAppTemp />
            </div>

          </div>
    </section>
  )
}

export default TaxDetail
