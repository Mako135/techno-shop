import create from "zustand";
import useLanguageStore from "./useLanguageStore";

export const API = "http://127.0.0.1:8000";

const usePhoneStore = create(set => ({
  phone: null,
  phones: [],
  loading: false,
  error: null,
  cameras: [],
  memories: [],

  fetchCameras: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `${API}/api/cameras/`
      );
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }
      const data = await response.json();
      set({ cameras: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  fetchMemories: async() => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `${API}/api/memories/`
      );
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }
      const data = await response.json();
      set({ memories: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  fetchPhoneById: async id => {
    const { language } = useLanguageStore.getState();
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `${API}/${language}/api/phones/${id}`
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
}));


export default usePhoneStore;
