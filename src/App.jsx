// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, InterFaces, InterfaceDetailsPage, AboutUs, ContactUs } from "./pages/index";
import "./App.css";
import LanguageSelection from "./components/LanguageSelection";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <LanguageSelection />
      </div>
      <Routes>
        <Route path="/:language/home" element={<Home />} />
        <Route path="/:language/interfaces" element={<InterFaces />} />
        <Route path="/:language/interfaces/:id" element={<InterfaceDetailsPage />} />
        <Route path="/:language/about-us" element={<AboutUs />} />
        <Route path="/:language/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
