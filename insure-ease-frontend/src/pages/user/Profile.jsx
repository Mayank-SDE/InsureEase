import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
    profilePicture: "https://via.placeholder.com/150",
  });

  const [editing, setEditing] = useState(false);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEditToggle = () => setEditing(!editing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSave = () => {
    if (!user.firstName || !user.lastName || !user.phone || !user.address) {
      toast.error("All fields must be filled!");
      return;
    }
    if (!/^\d{3}-\d{3}-\d{4}$/.test(user.phone)) {
      toast.error("Phone number must be in format XXX-XXX-XXXX");
      return;
    }

    toast.success("Profile updated successfully!");
    setEditing(false);
  };

  const handlePasswordUpdate = () => {
    const { oldPassword, newPassword, confirmPassword } = passwords;

    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill in all password fields!");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters!");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    toast.success("Password updated successfully!");
    setPasswords({ oldPassword: "", newPassword: "", confirmPassword: "" });
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast.success("Account deleted successfully!");
      console.log("Account deleted");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Profile</h2>
      <div className="card p-3">
        <div className="text-center">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="rounded-circle"
            width="120"
          />
          <div>
            <button className="btn btn-primary mt-2">Change Picture</button>
          </div>
        </div>

        <div className="mt-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            disabled={!editing}
          />

          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            disabled={!editing}
          />

          <label>Email</label>
          <input type="email" className="form-control" value={user.email} disabled />

          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            disabled={!editing}
          />

          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={user.address}
            onChange={handleInputChange}
            disabled={!editing}
          />
        </div>

        <div className="mt-3">
          {editing ? (
            <button className="btn btn-success" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="btn btn-warning" onClick={handleEditToggle}>
              Edit
            </button>
          )}
        </div>
      </div>

      <div className="card p-3 mt-4">
        <h5>Change Password</h5>
        <input
          type="password"
          className="form-control"
          name="oldPassword"
          placeholder="Old Password"
          value={passwords.oldPassword}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          className="form-control mt-2"
          name="newPassword"
          placeholder="New Password"
          value={passwords.newPassword}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          className="form-control mt-2"
          name="confirmPassword"
          placeholder="Confirm New Password"
          value={passwords.confirmPassword}
          onChange={handlePasswordChange}
        />
        <button className="btn btn-primary mt-2" onClick={handlePasswordUpdate}>
          Update Password
        </button>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-danger" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
