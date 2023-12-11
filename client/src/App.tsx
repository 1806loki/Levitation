import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import MultiStepFormPage from "./pages/MultiStepFormPage";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<MultiStepFormPage />} />

        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
      </Routes>{" "}
      <ToastContainer />
    </Router>
  );
};

export default App;
