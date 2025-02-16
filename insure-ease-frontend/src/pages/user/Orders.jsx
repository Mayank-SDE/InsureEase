import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Orders = () => {
  const [orders] = useState([
    {
      id: "ORD12345",
      policyType: "Car Insurance",
      orderDate: "2025-02-15",
      amount: "$200",
      status: "Completed",
      paymentStatus: "Paid",
    },
    {
      id: "ORD67890",
      policyType: "Health Insurance",
      orderDate: "2025-02-10",
      amount: "$500",
      status: "Pending",
      paymentStatus: "Unpaid",
    },
  ]);

  const handleViewDetails = (orderId) => {
    toast.info(`Viewing details for Order ID: ${orderId}`);
  };

  return (
    <div className="container mt-4">
      <h2>My Orders</h2>
      <div className="card p-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Policy Type</th>
              <th>Order Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.policyType}</td>
                <td>{order.orderDate}</td>
                <td>{order.amount}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "Completed" ? "bg-success" : "bg-warning"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      order.paymentStatus === "Paid" ? "bg-primary" : "bg-danger"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => handleViewDetails(order.id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Orders;
