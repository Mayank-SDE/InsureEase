import { Link } from "react-router-dom";
import LifeInsuranceImg from '../assets/images/life.png';
const LifeInsurance = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary fw-bold">Life Insurance</h2>
      <p className="text-muted text-center">
        Secure your family&apos;s future with our comprehensive life insurance plans.
      </p>

      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src={LifeInsuranceImg}
            alt="Life Insurance"
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold">Why Choose Our Life Insurance?</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ Affordable Premiums</li>
            <li className="list-group-item">✅ Financial Security for Your Loved Ones</li>
            <li className="list-group-item">✅ Flexible Coverage Options</li>
            <li className="list-group-item">✅ Tax Benefits & Savings</li>
            <li className="list-group-item">✅ Hassle-Free Claim Process</li>
          </ul>
          
          <Link to="/life-insurance-calculator" className="btn btn-primary mt-4 fw-bold">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LifeInsurance;