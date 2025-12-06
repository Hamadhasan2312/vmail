import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// i18next configuration
i18n
  // Load translation files from server/public folder
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass i18n instance to react-i18next
  .use(initReactI18next)
  // Init i18next
  .init({
    // FORCE ENGLISH LANGUAGE
    lng: "en", 

    // Debug mode
    debug: true,
    
    // Fallback to English if detection fails
    fallbackLng: "en",
    
    // Namespaces configuration
    ns: ["common"],
    defaultNS: "common",
    
    // Supported languages
    supportedLngs: ["en", "zh", "fr", "ja", "hi", "de", "ko", "zh-TW", "it", "pt", "tr", "ru"],
    
    // Backend configuration
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    
    // Detection configuration
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie", "localStorage"],
    },
  });

export default i18n;
