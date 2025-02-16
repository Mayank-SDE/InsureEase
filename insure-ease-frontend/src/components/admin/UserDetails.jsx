import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UserDetails = () => {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Replace with actual API call
    const fetchUserDetails = async () => {
      const userData = {
        id,
        name: "John Doe",
        email: "john@example.com",
        role: "User",
        joinDate: "2024-01-15",
        policies: [
          { id: 101, type: "Car Insurance", status: "Active" },
          { id: 102, type: "Health Insurance", status: "Expired" },
        ],
        claims: [
          { id: 201, type: "Car Insurance", status: "Pending" },
        ],
      };
      setUser(userData);
    };

    fetchUserDetails();
  }, [id]);

  if (!user) return <p className="text-center mt-5">Loading user details...</p>;

  return (
    <div className="container mt-4">
      <h2>User Details</h2>
      <div className="card p-3">
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p>
          <strong>Role:</strong> 
          <span className={`badge ${user.role === "Admin" ? "bg-success" : "bg-primary"} ms-2`}>
            {user.role}
          </span>
        </p>
        <p><strong>Join Date:</strong> {user.joinDate}</p>

        {/* Policies Section */}
        <h4 className="mt-4">Policies</h4>
        {user.policies.length > 0 ? (
          <ul className="list-group">
            {user.policies.map((policy) => (
              <li key={policy.id} className="list-group-item">
                {policy.type} - <span className="badge bg-info">{policy.status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No policies found.</p>
        )}

        {/* Claims Section */}
        <h4 className="mt-4">Claims</h4>
        {user.claims.length > 0 ? (
          <ul className="list-group">
            {user.claims.map((claim) => (
              <li key={claim.id} className="list-group-item">
                {claim.type} - <span className="badge bg-warning">{claim.status}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No claims found.</p>
        )}

        {/* Action Buttons */}
        <div className="mt-4">
          {user.role === "User" ? (
            <button className="btn btn-warning me-2">Promote to Admin</button>
          ) : (
            <button className="btn btn-secondary me-2">Demote to User</button>
          )}
          <button className="btn btn-danger me-2">Delete User</button>
          <Link to="/admin/manage-users" className="btn btn-outline-primary">Back to Users</Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
