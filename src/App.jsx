import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  InterFaces,
  InterfaceDetailsPage,
  AboutUs,
  ContactUs,
} from "./pages/index";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paper" element={<InterFaces />} />
        <Route path="/paper/:id" element={<InterfaceDetailsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
