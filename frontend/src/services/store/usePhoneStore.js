import { create } from "zustand";
import useLanguageStore from "./useLanguageStore";
import { fetchData } from "../requests/requests";

export const API = "http://127.0.0.1:8000";

const usePhoneStore = create(set => ({
  phone: null,
  loading: false,
  error: null,
  cameras: [],
  memories: [],

  fetchCameras: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchData(`${API}/api/cameras/`);
      set({ cameras: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchMemories: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchData(`${API}/api/memories/`);
      set({ memories: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchPhoneById: async id => {
    const { language } = useLanguageStore.getState();
    set({ loading: true, error: null });
    try {
      const data = await fetchData(`${API}/${language}/api/phones/${id}`);
      set({ phone: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default usePhoneStore;
