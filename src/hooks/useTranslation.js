import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback para português se não encontrar a tradução
        console.warn(
          `Translation not found for key: ${key} in language: ${language}`
        );
        value = translations.pt;
        for (const fallbackKey of keys) {
          if (value && typeof value === "object" && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Retorna a chave se não encontrar a tradução
          }
        }
        break;
      }
    }

    return value || key;
  };

  return { t, language };
};
