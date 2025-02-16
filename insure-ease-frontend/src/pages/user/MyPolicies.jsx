import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyPolicies = () => {
  const [policies, setPolicies] = useState([
    {
      id: 1,
      type: "Car Insurance",
      status: "Active",
      expiryDate: "2025-02-15",
    },
    {
      id: 2,
      type: "Health Insurance",
      status: "Expired",
      expiryDate: "2024-01-10",
    },
  ]);

  const handleRenewPolicy = (id) => {
    toast.success("Policy renewal initiated!");
    console.log("Renewing policy with ID:", id);
  };

  return (
    <div className="container mt-4">
      <h2>My Policies</h2>
      <div className="card p-3">
        {policies.length > 0 ? (
          policies.map((policy) => (
            <div key={policy.id} className="card mb-3 p-3">
              <h5>{policy.type}</h5>
              <p>Status: <strong>{policy.status}</strong></p>
              <p>Expiry Date: {policy.expiryDate}</p>
              <Link to={`/policy/${policy.id}`} className="btn btn-primary me-2">
                View Details
              </Link>
              {policy.status === "Expired" && (
                <button
                  className="btn btn-warning"
                  onClick={() => handleRenewPolicy(policy.id)}
                >
                  Renew Policy
                </button>
              )}
            </div>
          ))
        ) : (
          <p>No policies found.</p>
        )}
      </div>
    </div>
  );
};

export default MyPolicies;
