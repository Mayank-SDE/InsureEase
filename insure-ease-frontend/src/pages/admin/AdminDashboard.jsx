import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Admin Dashboard</h2>
      
      <div className="row">
        {/* Summary Cards */}
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">Manage platform users.</p>
              <Link to="/admin/users" className="btn btn-light">Manage Users</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Policies</h5>
              <p className="card-text">View and manage insurance policies.</p>
              <Link to="/admin/policies" className="btn btn-light">Manage Policies</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Claims</h5>
              <p className="card-text">Review and approve claims.</p>
              <Link to="/admin/claims" className="btn btn-light">Approve Claims</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>
              <p className="card-text">Monitor customer orders.</p>
              <Link to="/admin/orders" className="btn btn-light">Manage Orders</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="text-center mt-4">
        <Link to="/admin/analytics" className="btn btn-dark">View Analytics</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
