import { useState } from "react";
import { Link } from "react-router-dom";

const LifeInsuranceCalculator = () => {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("male");
  const [coverage, setCoverage] = useState(100000);
  const [smoker, setSmoker] = useState(false);
  const [quote, setQuote] = useState(null);

  const calculatePremium = () => {
    let baseRate = 50;
    if (age > 40) baseRate += 20;
    if (gender === "female") baseRate -= 5;
    if (smoker) baseRate += 30;
    
    const estimatedPremium = ((coverage / 10000) * baseRate).toFixed(2);
    setQuote(estimatedPremium);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary text-center">Life Insurance Calculator</h2>
      <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="18"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Coverage Amount ($)</label>
          <input
            type="number"
            className="form-control"
            value={coverage}
            onChange={(e) => setCoverage(e.target.value)}
            step="5000"
            min="50000"
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={smoker}
            onChange={() => setSmoker(!smoker)}
          />
          <label className="form-check-label">Smoker</label>
        </div>

        <button className="btn btn-primary w-100" onClick={calculatePremium}>Get Quote</button>
        
        {quote && (
          <div className="alert alert-success mt-3 text-center">
            Your estimated premium: <strong>${quote}/month</strong>
            <div className="mt-2">
              <Link to="/register" className="btn btn-outline-primary">Sign Up to Purchase</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LifeInsuranceCalculator;