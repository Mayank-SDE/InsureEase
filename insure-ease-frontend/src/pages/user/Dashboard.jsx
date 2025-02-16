import { useState } from "react";
import { Link } from "react-router-dom";


const Dashboard = () => {
  const [user] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
  });

  const [stats] = useState({
    totalPolicies: 3,
    activeClaims: 1,
    pendingOrders: 2,
  });

  const [recentActivity] = useState([
    { id: 1, type: "policy", description: "Purchased Life Insurance", date: "2025-02-15" },
    { id: 2, type: "claim", description: "Filed a claim for Car Insurance", date: "2025-02-14" },
    { id: 3, type: "order", description: "Ordered Health Insurance", date: "2025-02-13" },
  ]);

  return (
    <div className="container mt-4">
      <h2>Welcome, {user.firstName} {user.lastName}!</h2>
      <p>Email: {user.email}</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3 text-center">
            <h5>Total Policies</h5>
            <h2>{stats.totalPolicies}</h2>
            <Link to="/my-policies" className="btn btn-primary mt-2">View Policies</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 text-center">
            <h5>Active Claims</h5>
            <h2>{stats.activeClaims}</h2>
            <Link to="/claims" className="btn btn-warning mt-2">Manage Claims</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 text-center">
            <h5>Pending Orders</h5>
            <h2>{stats.pendingOrders}</h2>
            <Link to="/orders" className="btn btn-info mt-2">View Orders</Link>
          </div>
        </div>
      </div>

      <h4 className="mt-4">Recent Activity</h4>
      <ul className="list-group">
        {recentActivity.map((activity) => (
          <li key={activity.id} className="list-group-item">
            <strong>{activity.type.toUpperCase()}</strong>: {activity.description} ({activity.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
