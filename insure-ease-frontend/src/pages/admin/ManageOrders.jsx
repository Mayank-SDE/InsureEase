import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders (Simulated API Call)
  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        { id: 101, user: "John Doe", policies: ["Car Insurance", "Life Insurance"], total: 1500, status: "Processing" },
        { id: 102, user: "Jane Smith", policies: ["Health Insurance"], total: 800, status: "Completed" },
        { id: 103, user: "Alice Brown", policies: ["Home Insurance"], total: 1200, status: "Cancelled" },
        { id: 104, user: "Bob Johnson", policies: ["Car Insurance"], total: 500, status: "Processing" },
      ];
      setOrders(mockOrders);
      setLoading(false);
    }, 1000);
  }, []);

  // Update order status
  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
    alert(`Order #${id} status updated to ${newStatus}`);
  };

  if (loading) {
    return <div className="text-center mt-4"><strong>Loading orders...</strong></div>;
  }

  return (
    <div className="container mt-4">
      <h2>Manage Orders</h2>
      <div className="card shadow p-4">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Policies Ordered</th>
              <th>Total Price ($)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.user}</td>
                  <td>{order.policies.join(", ")}</td>
                  <td>${order.total}</td>
                  <td>
                    <select 
                      className={`form-select ${order.status === "Completed" ? "bg-success text-white" : order.status === "Cancelled" ? "bg-danger text-white" : "bg-warning text-dark"}`}
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <Link to={`/admin/order-details/${order.id}`} className="btn btn-info btn-sm me-2">View</Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No orders available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
