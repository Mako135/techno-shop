import { create } from "zustand";
import useLanguageStore from "./useLanguageStore";
import { fetchData } from "../requests/requests";
import { API } from "./usePhoneStore";

const useNewsStore = create(set => ({
  news: [],
  loading: false,
  error: null,
  newsDetail: null,

  fetchNews: async () => {
    const { language } = useLanguageStore.getState();

    set({ loading: true, error: null });
    try {
      const data = await fetchData(`${API}/${language}/api/news`);
      set({ news: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  fetchNewsById: async id => {
    const { language } = useLanguageStore.getState();
    set({ loading: true, error: null });
    try {
      const data = await fetchData(`${API}/${language}/api/news/${id}`);
      set({ newsDetail: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useNewsStore;
