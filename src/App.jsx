import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, AboutUs, ContactUs, Paper, PaperDetails } from "./pages/index";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paper" element={<Paper />} />
        <Route path="/paper/:id" element={<PaperDetails />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
