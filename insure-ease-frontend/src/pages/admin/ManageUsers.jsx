import { useState } from "react";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  // Sample user data (Replace with API call later)
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "User", joinDate: "2024-01-15" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", role: "Admin", joinDate: "2023-12-10" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", joinDate: "2024-02-05" },
  ]);

  const [search, setSearch] = useState("");

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()) || 
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Manage Users</h2>

      {/* Search Bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Users Table */}
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge ${user.role === "Admin" ? "bg-success" : "bg-primary"}`}>
                    {user.role}
                  </span>
                </td>
                <td>{user.joinDate}</td>
                <td>
                  <Link to={`/admin/user/${user.id}`} className="btn btn-info btn-sm me-2">
                    View
                  </Link>
                  {user.role === "User" ? (
                    <button className="btn btn-warning btn-sm me-2">Promote to Admin</button>
                  ) : (
                    <button className="btn btn-secondary btn-sm me-2">Demote to User</button>
                  )}
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
