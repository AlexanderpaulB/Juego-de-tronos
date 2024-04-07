import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { english } from "./english";
import { spanish } from "./spanish";

const resources = {
  spanish: {
    translation: spanish,
  },
  english: {
    translation: english,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
