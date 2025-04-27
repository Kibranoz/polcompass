import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",

      questions : {
        "ta": "Totally agree",
        "a": "Agree",
        "u": "Unsure / Neutral",
        "d": "Disagree",
        "td": "Totally disagree"
      },
      header: {
        "home": "Home",
        "create": "Create",
        "list": "List",
      },
      list: {
        "see_compass": "See the political compass"
      }

    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",

      questions : {
        "ta": "Tout à fait d'accord",
        "a": "D'accord",
        "u": "Neutre / Indécis",
        "d": "Pas d'accord",
        "td": "Pas du tout d'accord"
      },
      list: {
        "see_compass": "Voir la boussole politique"
      },

      header: {
        "home": "Accueil",
        "create": "Créer",
        "list": "Liste",
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detect user language
  .init({
    resources,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;