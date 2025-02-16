import { useState } from "react";
import { toast } from "react-toastify";

const Claims = () => {
  const [claims, setClaims] = useState([
    {
      id: 1,
      policy: "Car Insurance",
      status: "Pending",
      claimDate: "2024-02-01",
    },
    {
      id: 2,
      policy: "Health Insurance",
      status: "Approved",
      claimDate: "2024-01-15",
    },
    {
      id: 3,
      policy: "Home Insurance",
      status: "Rejected",
      claimDate: "2024-01-10",
    },
  ]);

  const handleViewDetails = (claim) => {
    toast.info(`Viewing details for ${claim.policy}`);
  };

  return (
    <div className="container mt-4">
      <h2>My Claims</h2>
      <button className="btn btn-primary mb-3">Submit New Claim</button>
      <div className="card p-3">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Policy</th>
              <th>Status</th>
              <th>Claim Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim, index) => (
              <tr key={claim.id}>
                <td>{index + 1}</td>
                <td>{claim.policy}</td>
                <td>
                  <span
                    className={`badge ${
                      claim.status === "Approved"
                        ? "bg-success"
                        : claim.status === "Rejected"
                        ? "bg-danger"
                        : "bg-warning"
                    }`}
                  >
                    {claim.status}
                  </span>
                </td>
                <td>{claim.claimDate}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => handleViewDetails(claim)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Claims;
