// LanguageSelection.jsx
import { useNavigate } from "react-router-dom";

const LanguageSelection = () => {
  const navigate = useNavigate();

  const handleChangeLanguage = (language) => {
    navigate(`/${language}/home`);
  };

  return (
    <div>
      <h2>Select Language:</h2>
      <button onClick={() => handleChangeLanguage("en")}>English</button>
      <button onClick={() => handleChangeLanguage("fr")}>French</button>
      <button onClick={() => handleChangeLanguage("ar")}>Arabic</button>
    </div>
  );
};

export default LanguageSelection;
