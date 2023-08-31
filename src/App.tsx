import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import i18next from "i18next";
import { initReactI18next, useTranslation, Trans } from "react-i18next";
import en from "./localization/en.json";
import es from "./localization/es.json";

i18next.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: en,
    es: es,
  },
});

const MyComponent = () => {
  const name = "John Smith";

  return (
    <div>
      <Trans
        i18nKey="key"
        values={{ name, normal: "world" }}
        components={{ anchor: <a /> }}
      />
    </div>
  );
};

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
          }
        >
          change language
        </button>
        <MyComponent />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
