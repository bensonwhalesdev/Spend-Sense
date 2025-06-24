import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/landingpage";
import ContactPage from "./Components/Pages/ContactPage";
import Dashboard from "./Components/Pages/Dashboard";
import Register from "./Components/Pages/(AuthPages)/Resgister";
import Login from "./Components/Pages/(AuthPages)/Login";
import WhySpendSense from "./Components/Pages/WhySpendSensePage";
import FAQSection from "./Components/LandingPage/Accordion";
import Reflect from "./Components/Pages/Dashboard/Sidebar/ReflectPage";
import AccountsOverview from "./Components/Pages/Dashboard/Sidebar/AllAccounts";
import ViewUserProfile from "./Components/Pages/Dashboard/Sidebar/ViewUserProfile";
import GuidePage from "./Components/Pages/Dashboard/Sidebar/Guide";

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
        <Route path="/reflect" element={<Reflect />} />
        <Route path="/allaccounts" element={<AccountsOverview />} />
        <Route path="/viewprofile" element={<ViewUserProfile />} />
        <Route path="/guide" element={<GuidePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
