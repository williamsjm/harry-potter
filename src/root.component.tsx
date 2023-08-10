import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";
import Characters from "./components/Characters/Characters";

export default function Root(props) {
  const { i18n } = useTranslation();

  useEffect(() => {
    function updateLanguage(event) {
      i18n.changeLanguage(event.detail);
    }

    window.addEventListener("set-language", updateLanguage);

    return () => {
      window.removeEventListener("set-language", updateLanguage);
    };
  }, [i18n.language]);

  return (
    <div>
      <Characters />
    </div>
  );
}
