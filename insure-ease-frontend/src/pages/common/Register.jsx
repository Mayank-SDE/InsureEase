import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import ProfileImg from '../../assets/images/profile.avif';
const Register = () => {
  const [formData, setFormData] = useState({
    profilePicture: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [imagePreview, setImagePreview] = useState(ProfileImg);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10,15}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePicture: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword, phone, dob, gender, address, city, state, country, pincode } = formData;
    
    if (!firstName || !lastName || !email || !password || !confirmPassword || !dob || !gender || !phone || !address || !city || !state || !country || !pincode) {
      toast.error("All fields are required!");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email format!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!validatePhone(phone)) {
      toast.error("Invalid phone number!");
      return;
    }
    toast.success("Registration successful!");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh", paddingTop: "15px" }}>
      <div className="card p-3 shadow-lg" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="text-center mb-2">
          <label htmlFor="profilePicture" className="d-block position-relative">
            <input type="file" id="profilePicture" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
            <img src={imagePreview} alt="Profile" className="rounded-circle" style={{ width: "100px", height: "100px", objectFit: "cover", cursor: "pointer" }} />
          </label>
        </div>
        <h2 className="text-center text-primary fs-3">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
            </div>
            <div className="col-md-6 mb-2">
              <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
            </div>
          </div>
          <input type="email" className="form-control mb-2" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <div className="row">
            <div className="col-md-6 mb-2">
              <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            </div>
            <div className="col-md-6 mb-2">
              <input type="password" className="form-control" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
            </div>
          </div>
          <input type="date" className="form-control mb-2" name="dob" value={formData.dob} onChange={handleChange} />
          <select className="form-control mb-2" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input type="tel" className="form-control mb-2" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
          <textarea className="form-control mb-2" name="address" value={formData.address} onChange={handleChange} placeholder="Address" rows="2"></textarea>
          <div className="row">
            <div className="col-md-4 mb-2">
              <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
            </div>
            <div className="col-md-4 mb-2">
              <input type="text" className="form-control" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
            </div>
            <div className="col-md-4 mb-2">
              <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">Register</button>
          <div className="text-center d-flex gap-2 justify-content-center">
            <button className="btn btn-danger"><FaGoogle /> Google</button>
            <button className="btn btn-dark"><FaGithub /> GitHub</button>
          </div>
          <div className="text-center mt-2">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;