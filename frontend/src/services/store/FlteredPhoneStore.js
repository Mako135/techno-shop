import { create } from "zustand";
import useLanguageStore from "./useLanguageStore";
import { constructUrl } from "../url/urlCollector";
import { fetchPhones } from "../requests/requests";

const useFilteredPhoneStore = create(set => ({
  phones: [],
  loading: false,
  error: null,
  fetchPhones: async (params = {}) => {
    const { language } = useLanguageStore.getState();
    set({ loading: true, error: null });

    try {
      const url = constructUrl(params, language);
      const data = await fetchPhones(url);
      set({ phones: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useFilteredPhoneStore;
