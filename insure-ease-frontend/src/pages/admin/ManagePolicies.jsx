import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManagePolicies = () => {
  const [policies, setPolicies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Replace with actual API call
    const fetchPolicies = async () => {
      const policiesData = [
        { id: 101, type: "Car Insurance", status: "Active", price: "$200", date: "2024-01-10" },
        { id: 102, type: "Health Insurance", status: "Expired", price: "$300", date: "2023-12-05" },
        { id: 103, type: "Life Insurance", status: "Active", price: "$500", date: "2024-02-01" },
      ];
      setPolicies(policiesData);
    };

    fetchPolicies();
  }, []);

  // Filter policies based on search input
  const filteredPolicies = policies.filter((policy) =>
    policy.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Manage Policies</h2>

      {/* Search Bar & Add New Policy Button */}
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/admin/add-policy" className="btn btn-success">Add New Policy</Link>
      </div>

      {/* Policies Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Status</th>
              <th>Price</th>
              <th>Created Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPolicies.length > 0 ? (
              filteredPolicies.map((policy) => (
                <tr key={policy.id}>
                  <td>{policy.id}</td>
                  <td>{policy.type}</td>
                  <td>
                    <span className={`badge ${policy.status === "Active" ? "bg-success" : "bg-danger"}`}>
                      {policy.status}
                    </span>
                  </td>
                  <td>{policy.price}</td>
                  <td>{policy.date}</td>
                  <td>
                    <Link to={`/admin/edit-policy/${policy.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                    <button className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No policies found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePolicies;
