import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PolicyDetails = () => {
  const { id } = useParams();
  const [policy] = useState({
    id,
    name: "Comprehensive Car Insurance",
    type: "Car Insurance",
    coverage: "$50,000",
    premium: "$120/month",
    duration: "1 Year",
    startDate: "2024-01-01",
    endDate: "2025-01-01",
    status: "Active",
    document: "policy_document.pdf",
  });

  const handleDownload = () => {
    toast.success("Downloading policy document...");
    // Simulate document download
    setTimeout(() => {
      window.open(`/downloads/${policy.document}`, "_blank");
    }, 1000);
  };

  return (
    <div className="container mt-4">
      <h2>Policy Details</h2>
      <div className="card p-3">
        <h4>{policy.name}</h4>
        <p><strong>Type:</strong> {policy.type}</p>
        <p><strong>Coverage:</strong> {policy.coverage}</p>
        <p><strong>Premium:</strong> {policy.premium}</p>
        <p><strong>Duration:</strong> {policy.duration}</p>
        <p><strong>Start Date:</strong> {policy.startDate}</p>
        <p><strong>End Date:</strong> {policy.endDate}</p>
        <p><strong>Status:</strong> <span className={policy.status === "Active" ? "text-success" : "text-danger"}>{policy.status}</span></p>
        
        <button className="btn btn-primary mt-2" onClick={handleDownload}>Download Policy Document</button>
        {policy.status === "Active" && (
          <button className="btn btn-warning mt-2 ms-2">Renew Policy</button>
        )}
      </div>
    </div>
  );
};

export default PolicyDetails;
