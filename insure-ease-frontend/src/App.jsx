// App.jsx - Main Application Component
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CarInsurance from "./pages/CarInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import HealthInsurance from "./pages/HealthInsurance";
import HomeInsurance from "./pages/HomeInsurance";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CarInsuranceCalculator from "./pages/CarInsuranceCalculator";
import LifeInsuranceCalculator from "./pages/LifeInsuranceCalculator";
import HealthInsuranceCalculator from "./pages/HealthInsuranceCalculator";
import HomeInsuranceCalculator from "./pages/HomeINsuranceCalculator";
import InsuranceOptions from "./pages/InsuranceOptions";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        <Route path="/insurance/car" element={<CarInsurance />} />
        <Route path="/car-insurance-calculator" element={<CarInsuranceCalculator />} />
        <Route path="/insurance/life" element={<LifeInsurance />} />
        <Route path="/life-insurance-calculator" element={<LifeInsuranceCalculator />} />
        
        <Route path="/insurance/health" element={<HealthInsurance />} />
        <Route path="/health-insurance-calculator" element={<HealthInsuranceCalculator />} />
        
        <Route path="/insurance/home" element={<HomeInsurance />} />
        <Route path="/home-insurance-calculator" element={<HomeInsuranceCalculator />} />
        
        <Route path="/insurance-options" element={<InsuranceOptions />} />
        
      </Routes>
    </div>
  );
};

export default App;