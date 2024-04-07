// eslint-disable-next-line no-unused-vars

import React from "react";
import i18n from "../../language/i18n";
import "./Idiomas.css";

const LanguageSwitcher = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="translate-buttons">
      <button
        className="english-button"
        onClick={() => changeLanguage("en")}
      ></button>
      <button
        className="spanish-button"
        onClick={() => changeLanguage("es")}
      ></button>
    </div>
  );
};

export default LanguageSwitcher;
