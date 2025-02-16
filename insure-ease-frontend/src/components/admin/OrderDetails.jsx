import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulated API call to fetch order details
  useEffect(() => {
    setTimeout(() => {
      const mockOrder = {
        id: orderId,
        user: "John Doe",
        email: "johndoe@example.com",
        policies: [
          { name: "Car Insurance", price: 500 },
          { name: "Life Insurance", price: 1000 },
        ],
        total: 1500,
        status: "Processing",
        date: "2025-02-16",
      };
      setOrder(mockOrder);
      setLoading(false);
    }, 1000);
  }, [orderId]);

  // Update order status
  const handleStatusChange = (newStatus) => {
    setOrder({ ...order, status: newStatus });
    alert(`Order status updated to ${newStatus}`);
  };

  if (loading) {
    return <div className="text-center mt-4"><strong>Loading order details...</strong></div>;
  }

  return (
    <div className="container mt-4">
      <h2>Order Details</h2>
      <div className="card shadow p-4">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>User:</strong> {order.user} ({order.email})</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Total Price:</strong> ${order.total}</p>

        <h4>Policies Ordered</h4>
        <ul className="list-group mb-3">
          {order.policies.map((policy, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>{policy.name}</span>
              <span>${policy.price}</span>
            </li>
          ))}
        </ul>

        <label><strong>Status:</strong></label>
        <select 
          className={`form-select mb-3 ${order.status === "Completed" ? "bg-success text-white" : order.status === "Cancelled" ? "bg-danger text-white" : "bg-warning text-dark"}`}
          value={order.status}
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <option value="Processing">Processing</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <Link to="/admin/orders" className="btn btn-secondary">Back to Orders</Link>
      </div>
    </div>
  );
};

export default OrderDetails;
