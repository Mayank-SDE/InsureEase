import { Link } from "react-router-dom";
import healthImage from "../assets/images/health.png";

const HealthInsurance = () => {
  return (
    <div className="container my-5">
      {/* Banner Section */}
      <div className="text-center mb-4">
        <img
          src={healthImage}
          alt="Health Insurance"
          className="img-fluid rounded shadow-sm"
          style={{ maxWidth: "50%", height: "auto" }} // Reduced size
        />
        <h2 className="mt-3 text-primary fw-bold">Health Insurance Plans</h2>
        <p className="lead text-muted">
          Secure your family's health with our comprehensive insurance plans.
        </p>
      </div>

      {/* Features Section */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold text-primary">Affordable Plans</h5>
              <p className="text-muted">Get coverage at the best prices available.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold text-primary">Cashless Treatment</h5>
              <p className="text-muted">Access top hospitals without upfront payments.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="fw-bold text-primary">24/7 Support</h5>
              <p className="text-muted">We are here for you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center my-5">
        <h4 className="fw-bold text-primary">Get Your Personalized Quote Today!</h4>
        <p className="text-muted">Use our calculator to estimate your health insurance premium.</p>
        <Link to="/health-insurance-calculator" className="btn btn-primary px-4 py-2">
          Get Quote
        </Link>
      </div>
    </div>
  );
};

export default HealthInsurance;
