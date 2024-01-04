import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home, InterFaces, InterfaceDetailsPage, AboutUs, ContactUs } from "./pages/index";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect / to /ar/home */}
        <Route
          path="/"
          element={<Navigate to="/ar/home" replace />}
        />
        <Route path="/ar/home" element={<Home />} />
        <Route path="/ar/interfaces" element={<InterFaces />} />
        <Route path="/ar/interfaces/:id" element={<InterfaceDetailsPage />} />
        <Route path="/ar/about-us" element={<AboutUs />} />
        <Route path="/ar/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
