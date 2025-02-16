import { useState } from "react";

const HomeInsuranceCalculator = () => {
  const [homeValue, setHomeValue] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [locationRisk, setLocationRisk] = useState("low");
  const [premium, setPremium] = useState(null);

  const calculatePremium = () => {
    if (!homeValue || !coverageAmount) {
      alert("Please enter valid home value and coverage amount.");
      return;
    }

    // Basic premium calculation logic
    let basePremium = (coverageAmount * 0.005).toFixed(2);
    let riskFactor = locationRisk === "high" ? 1.5 : locationRisk === "medium" ? 1.2 : 1.0;
    let finalPremium = (basePremium * riskFactor).toFixed(2);

    setPremium(finalPremium);
  };

  return (
    <div className="container my-5">
      <h2 className="text-primary fw-bold text-center">Home Insurance Calculator</h2>
      <p className="lead text-muted text-center">Get an estimate of your home insurance premium.</p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            {/* Home Value */}
            <div className="mb-3">
              <label className="form-label fw-bold">Home Value ($)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter home value"
                value={homeValue}
                onChange={(e) => setHomeValue(e.target.value)}
              />
            </div>

            {/* Coverage Amount */}
            <div className="mb-3">
              <label className="form-label fw-bold">Coverage Amount ($)</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter coverage amount"
                value={coverageAmount}
                onChange={(e) => setCoverageAmount(e.target.value)}
              />
            </div>

            {/* Location Risk Factor */}
            <div className="mb-3">
              <label className="form-label fw-bold">Location Risk Factor</label>
              <select
                className="form-select"
                value={locationRisk}
                onChange={(e) => setLocationRisk(e.target.value)}
              >
                <option value="low">Low Risk</option>
                <option value="medium">Medium Risk</option>
                <option value="high">High Risk</option>
              </select>
            </div>

            {/* Calculate Button */}
            <button className="btn btn-primary w-100" onClick={calculatePremium}>
              Get Quote
            </button>

            {/* Display Premium */}
            {premium && (
              <div className="alert alert-success mt-4 text-center">
                <h5>Estimated Premium: <strong>${premium} per year</strong></h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInsuranceCalculator;
