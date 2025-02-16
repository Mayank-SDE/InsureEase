import { Link } from "react-router-dom";
import HomeInsuranceImage from "../../assets/images/house.png";

const HomeInsurance = () => {
  return (
    <div className="container my-5">
      {/* Banner Section */}
      <div className="text-center mb-4">
        <img
          src={HomeInsuranceImage}
          alt="Home Insurance"
          className="img-fluid rounded shadow-sm"
          style={{ maxWidth: "50%" }} // Reduced image size
        />
        <h2 className="mt-3 text-primary fw-bold">Protect Your Home & Property</h2>
        <p className="lead text-muted">
          Secure your home against unforeseen damages with our comprehensive coverage plans.
        </p>
      </div>

      {/* Features Section */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold text-primary">Fire & Theft Coverage</h5>
              <p className="text-muted">Stay protected from major disasters and losses.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold text-primary">Affordable Premiums</h5>
              <p className="text-muted">Choose from budget-friendly plans tailored to you.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold text-primary">24/7 Claim Assistance</h5>
              <p className="text-muted">Quick and hassle-free claim processing anytime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center my-5">
        <h4 className="fw-bold text-primary">Get Your Home Insurance Quote Today!</h4>
        <p className="text-muted">Use our calculator to estimate your home insurance premium.</p>
        <Link to="/home-insurance-calculator" className="btn btn-primary px-4 py-2">
          Get Quote
        </Link>
      </div>
    </div>
  );
};

export default HomeInsurance;
