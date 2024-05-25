import create from "zustand";
import useLanguageStore from "./useLanguageStore";

const usePhoneStore = create(set => ({
  phone: null,
  phones: [],
  loading: false,
  error: null,

  fetchPhoneById: async id => {
    const { language } = useLanguageStore.getState();
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/${language}/api/phones/${id}`
      );
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }
      const data = await response.json();
      set({ phone: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchAllPhones: async () => {
    const { language } = useLanguageStore.getState();
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/${language}/api/phones`
      );
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }
      const data = await response.json();
      set({ phones: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));


export default usePhoneStore;
