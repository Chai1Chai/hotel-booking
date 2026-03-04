import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import {enNavbar} from "./i18n/en/navbar.js";
import {esNavbar} from "./i18n/es/navbar.js";
import {ruNavbar} from "./i18n/ru/navbar.js";

import {enCommon} from "./i18n/en/common.js";
import {esCommon} from "./i18n/es/common.js";
import {ruCommon} from "./i18n/ru/common.js";

import {enFooter} from "./i18n/en/footer.js";
import {esFooter} from "./i18n/es/footer.js";
import {ruFooter} from "./i18n/ru/footer.js";



i18n.use(initReactI18next).init({
    resources: {
        en: {
            navbar: enNavbar,
            common: enCommon,
            footer: enFooter
        },
        es: {
            navbar: esNavbar,
            common: esCommon,
            footer: esFooter
        },
        ru: {
            navbar: ruNavbar,
            common: ruCommon,
            footer: ruFooter
        },
    },
    fallbackLng: "en",
    lng: localStorage.getItem("lang") || "en",
    interpolation: {
        escapeValue: false
  }
});
export default i18n;