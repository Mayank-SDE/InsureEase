import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ClaimStatus = () => {
  const [claims, setClaims] = useState([
    { id: 1, policyName: "Car Insurance", status: "Pending", date: "2024-02-10" },
    { id: 2, policyName: "Health Insurance", status: "Approved", date: "2024-01-22" },
    { id: 3, policyName: "Home Insurance", status: "Rejected", date: "2023-12-15" },
  ]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredClaims = claims.filter((claim) =>
    claim.policyName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Claim Status</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search claims..."
          value={search}
          onChange={handleSearch}
        />
        <span className="input-group-text">
          <FaSearch />
        </span>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Policy Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredClaims.length > 0 ? (
            filteredClaims.map((claim, index) => (
              <tr key={claim.id}>
                <td>{index + 1}</td>
                <td>{claim.policyName}</td>
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
                <td>{claim.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No claims found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimStatus;
