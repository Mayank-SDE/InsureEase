import { useState } from "react";
import { toast } from "react-toastify";

const HealthInsuranceCalculator = () => {
  const [age, setAge] = useState("");
  const [coverage, setCoverage] = useState("");
  const [preExisting, setPreExisting] = useState("No");
  const [premium, setPremium] = useState(null);

  const calculatePremium = () => {
    if (!age || !coverage) {
      toast.error("Please enter all required fields!");
      return;
    }

    let basePremium = parseInt(coverage) * 0.02;
    
    if (age > 50) basePremium += 100;  
    if (preExisting === "Yes") basePremium += 200;

    setPremium(basePremium.toFixed(2));
  };

  return (
    <div className="container my-5">
      <h2 className="text-primary text-center fw-bold">Health Insurance Calculator</h2>
      <p className="text-muted text-center">Estimate your health insurance premium easily.</p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4">
            {/* Age Input */}
            <div className="mb-3">
              <label className="form-label fw-bold">Age</label>
              <input
                type="number"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
              />
            </div>

            {/* Coverage Amount Input */}
            <div className="mb-3">
              <label className="form-label fw-bold">Coverage Amount ($)</label>
              <input
                type="number"
                className="form-control"
                value={coverage}
                onChange={(e) => setCoverage(e.target.value)}
                placeholder="Enter desired coverage amount"
              />
            </div>

            {/* Pre-existing Condition Select */}
            <div className="mb-3">
              <label className="form-label fw-bold">Pre-existing Condition</label>
              <select className="form-select" value={preExisting} onChange={(e) => setPreExisting(e.target.value)}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button className="btn btn-primary w-100 fw-bold" onClick={calculatePremium}>
              Get Quote
            </button>

            {/* Display Estimated Premium */}
            {premium !== null && (
              <div className="alert alert-success mt-3 text-center">
                Estimated Premium: <strong>${premium} / month</strong>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsuranceCalculator;
