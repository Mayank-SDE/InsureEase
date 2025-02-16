import { useState, useEffect } from "react";

const ApproveClaims = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated API call to fetch pending claims
  useEffect(() => {
    setTimeout(() => {
      const mockClaims = [
        { id: 1, user: "Alice Johnson", policy: "Health Insurance", amount: 5000, status: "Pending", date: "2025-02-15" },
        { id: 2, user: "Bob Smith", policy: "Car Insurance", amount: 3000, status: "Pending", date: "2025-02-14" },
      ];
      setClaims(mockClaims);
      setLoading(false);
    }, 1000);
  }, []);

  // Update claim status
  const updateClaimStatus = (id, newStatus) => {
    setClaims(claims.map(claim => claim.id === id ? { ...claim, status: newStatus } : claim));
    alert(`Claim ${id} marked as ${newStatus}`);
  };

  if (loading) {
    return <div className="text-center mt-4"><strong>Loading claims...</strong></div>;
  }

  return (
    <div className="container mt-4">
      <h2>Approve Claims</h2>
      <div className="card shadow p-4">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Policy</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <tr key={claim.id}>
                <td>{claim.id}</td>
                <td>{claim.user}</td>
                <td>{claim.policy}</td>
                <td>${claim.amount}</td>
                <td>{claim.date}</td>
                <td>
                  <span className={`badge ${claim.status === "Approved" ? "bg-success" : claim.status === "Rejected" ? "bg-danger" : "bg-warning text-dark"}`}>
                    {claim.status}
                  </span>
                </td>
                <td>
                  {claim.status === "Pending" && (
                    <>
                      <button className="btn btn-success btn-sm me-2" onClick={() => updateClaimStatus(claim.id, "Approved")}>Approve</button>
                      <button className="btn btn-danger btn-sm" onClick={() => updateClaimStatus(claim.id, "Rejected")}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveClaims;
