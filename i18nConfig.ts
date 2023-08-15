// i18nConfig.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome",
      characters: "Characters",
      house: "Select a house",
      character_house: "House",
      species: "Species",
      dateOfBirth: "Date of birth",
      wizard: "Wizard",
      patronus: "Patronus",
      actor: "Actor",
    },
  },
  es: {
    translation: {
      Welcome: "Bienvenido",
      characters: "Personajes",
      house: "Seleccione una casa",
      character_house: "Casa",
      species: "Especie",
      dateOfBirth: " Dia de nacimiento",
      wizard: "Mago",
      patronus: "Patronus",
      actor: "Actor",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
