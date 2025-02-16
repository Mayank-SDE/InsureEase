import { Link } from "react-router-dom";
import CarInsuranceImage from "../../assets/images/car.png";

const CarInsurance = () => {
  return (
    <div className="container mt-4">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <img
          src={CarInsuranceImage}
          alt="Car Insurance"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "60%", height: "auto" }}
        />
        <h1 className="mt-3 text-primary fw-bold">Car Insurance</h1>
        <p className="text-muted">
          Protect your car with our comprehensive and affordable car insurance plans.
        </p>
      </div>

      {/* Insurance Benefits */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h3 className="text-primary fw-bold">Why Choose Our Car Insurance?</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ Comprehensive coverage for accidents & theft</li>
            <li className="list-group-item">✅ Hassle-free claims process</li>
            <li className="list-group-item">✅ 24/7 roadside assistance</li>
            <li className="list-group-item">✅ Affordable premium plans</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h3 className="text-primary fw-bold">Key Features</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">🚗 Covers vehicle damages due to accidents</li>
            <li className="list-group-item">🛡️ Third-party liability coverage</li>
            <li className="list-group-item">💰 Cashless repairs at network garages</li>
            <li className="list-group-item">⚡ Instant policy issuance</li>
          </ul>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mb-5">
        <h4 className="text-dark">Calculate your premium in seconds!</h4>
        <Link to="/car-insurance-calculator" className="btn btn-primary fw-bold px-4 py-2">
          Get a Quote Now
        </Link>
      </div>
    </div>
  );
};

export default CarInsurance;
