import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import { Button } from "react-bootstrap";
import React from "react";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  const flagCode = currentLang === "en" ? "GB" : "ES";

  return (
    <Button variant="outline-light" onClick={toggleLanguage}>
      <Flag code={flagCode} style={{ width: "24px", height: "16px" }} />
    </Button>
  );
};

export default LanguageToggle;