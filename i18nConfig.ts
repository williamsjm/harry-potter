// i18nConfig.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome",
      // ... otras traducciones en inglés
    },
  },
  es: {
    translation: {
      Welcome: "Bienvenido",
      // ... otras traducciones en español
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // idioma predeterminado
  interpolation: {
    escapeValue: false,
  },
});
