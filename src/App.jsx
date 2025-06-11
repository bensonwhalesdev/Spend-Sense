import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/landingpage";
import ContactPage from "./Components/Pages/ContactPage";
import Dashboard from "./Components/Pages/Dashboard";
import Register from "./Components/Pages/(AuthPages)/Resgister";
import Login from "./Components/Pages/(AuthPages)/Login";
import WhySpendSense from "./Components/Pages/WhySpendSensePage";
import FAQSection from "./Components/LandingPage/Accordion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/auth/signup" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/whyspendsense" element={<WhySpendSense />} />
      </Routes>
    </Router>
  );
}

export default App;
