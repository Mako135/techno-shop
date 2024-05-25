import create from "zustand";
import Cookies from "js-cookie";

const getInitialLanguage = () => {
  const savedLanguage = Cookies.get("language");
  return savedLanguage || "ru";
};

const useLanguageStore = create(set => ({
  language: getInitialLanguage(),
  setLanguage: lang => {
    console.log("language: ", lang);
    Cookies.set("language", lang);
    set({ language: lang });
  }
}));

export default useLanguageStore;
