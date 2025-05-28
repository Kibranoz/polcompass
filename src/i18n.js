import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",

      questions: {
        ta: "Totally agree",
        a: "Agree",
        u: "Unsure / Neutral",
        d: "Disagree",
        td: "Totally disagree",
      },
      header: {
        home: "Home",
        create: "Create",
        list: "List",
      },
      list: {
        see_compass: "See the political compass",
      },
      create: {
        name: "Name",
        desc: "Description",
        x_field: "X Field Name",
        y_field: "Y field Name",
        questions: "Questions",
        affects: "Affects",
        direction: "Direction",
        new_question: "New question",
        submit: "Submit",
        up: "Up or rightwards",
        down: "Down or leftwards",
      },
    },
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",

      questions: {
        ta: "Tout à fait d'accord",
        a: "D'accord",
        u: "Neutre / Indécis",
        d: "Pas d'accord",
        td: "Pas du tout d'accord",
      },
      header: {
        home: "Accueil",
        create: "Créer",
        list: "Liste",
      },
      list: {
        see_compass: "Voir la boussole politique",
      },
      create: {
        name: "Nom",
        desc: "Description",
        x_field: "Nom du champ X",
        y_field: "Nom du champ Y",
        questions: "Questions",
        affects: "Affecte",
        direction: "Direction",
        new_question: "Nouvelle question",
        submit: "Soumettre",
        up: "Haut ou vers la droite",
        down: "Bas ou vers la gauche",
      },
    },
  },
  es: {
    translation: {
      "Welcome to React": "Bienvenido a React y react-i18next",

      questions: {
        ta: "Totalmente de acuerdo",
        a: "De acuerdo",
        u: "Inseguro / Neutro",
        d: "En desacuerdo",
        td: "Totalmente en desacuerdo",
      },
      header: {
        home: "Inicio",
        create: "Crear",
        list: "Lista",
      },
      list: {
        see_compass: "Ver la búsqueda política",
      },
      create: {
        name: "Nombre",
        desc: "Descripción",
        x_field: "Nombre del campo X",
        y_field: "Nombre del campo Y",
        questions: "Preguntas",
        affects: "Afecta",
        direction: "Dirección",
        new_question: "Nueva pregunta",
        submit: "Enviar",
        up: "Arriba o a la derecha",
        down: "Abajo o a la izquierda",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detect user language
  .init({
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
