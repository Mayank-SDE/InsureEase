import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const PolicyDetailsAdmin = () => {
  const { policyId } = useParams();
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock API call (Replace with actual API)
    setTimeout(() => {
      setPolicy({
        id: policyId,
        title: "Comprehensive Car Insurance",
        description: "Covers damages, theft, and third-party liabilities.",
        coverage: "$50,000",
        price: "$300 per year",
        status: "Pending Approval",
      });
      setLoading(false);
    }, 1000);
  }, [policyId]);

  const handleApproval = async (newStatus) => {
    try {
      // Replace with API call
      await axios.put(`/api/admin/policies/${policyId}`, { status: newStatus });
      setPolicy((prev) => ({ ...prev, status: newStatus }));
      toast.success(`Policy ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update policy status");
    }
  };

  if (loading) return <div className="text-center mt-4"><strong>Loading policy details...</strong></div>;

  return (
    <div className="container mt-4">
      <h2>Policy Details (Admin)</h2>
      <div className="card shadow p-4">
        <h4>{policy.title}</h4>
        <p><strong>Description:</strong> {policy.description}</p>
        <p><strong>Coverage:</strong> {policy.coverage}</p>
        <p><strong>Price:</strong> {policy.price}</p>
        <p><strong>Status:</strong> <span className={`badge ${policy.status === "Approved" ? "bg-success" : "bg-warning"}`}>{policy.status}</span></p>

        <div className="mt-3">
          {policy.status === "Pending Approval" && (
            <>
              <button className="btn btn-success me-2" onClick={() => handleApproval("Approved")}>Approve</button>
              <button className="btn btn-danger" onClick={() => handleApproval("Rejected")}>Reject</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PolicyDetailsAdmin;
