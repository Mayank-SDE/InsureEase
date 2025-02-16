import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // Placeholder: Replace with Redux state later
  const [role, setRole] = useState("admin"); // "guest", "user", or "admin"

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to="/">InsuranceApp</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="insuranceDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore Insurance
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/insurance/car">Car Insurance</Link></li>
                <li><Link className="dropdown-item" to="/insurance/life">Life Insurance</Link></li>
                <li><Link className="dropdown-item" to="/insurance/health">Health Insurance</Link></li>
                <li><Link className="dropdown-item" to="/insurance/home">Home Insurance</Link></li>
              </ul>
            </li>
          </ul>

          {/* Right side navbar items */}
          <ul className="navbar-nav">
            {/* Guest Links */}
            {role === "guest" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/register">Register</Link>
                </li>
              </>
            )}

            {/* User Links */}
            {role === "user" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/buy-policies">Buy Policies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/my-policies">My Policies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/claims">Claims</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2">Logout</button>
                </li>
              </>
            )}

            {/* Admin Links */}
            {role === "admin" && (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/admin">Admin Dashboard</Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="adminDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Admin Panel
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/manage-policies">Manage Policies</Link></li>
                    <li><Link className="dropdown-item" to="/approve-claims">Approve Claims</Link></li>
                    <li><Link className="dropdown-item" to="/manage-orders">Manage Orders</Link></li>
                    <li><Link className="dropdown-item" to="/analytics">Analytics</Link></li>
                    <li><Link className="dropdown-item" to="/admin/users">Manage Users</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
