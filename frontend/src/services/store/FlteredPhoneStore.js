import { create } from "zustand";
import useLanguageStore from "./useLanguageStore";
import { constructUrl } from "../url/urlCollector";
import { fetchPhones } from "../requests/requests";

const useFilteredPhoneStore = create(set => ({
  phones: [],
  categories: [],
  loading: false,
  error: null,
  fetchPhones: async (params = {}) => {
    const { language } = useLanguageStore.getState();
    set({ loading: true, error: null });

    try {
      const url = constructUrl(params, language);
      const data = await fetchPhones(url);

      const phones = data;

      const categorizedPhones = data.reduce((acc, phone) => {
        const categoryIndex = acc.findIndex(
          c => c.name === phone.category.name
        );
        if (categoryIndex === -1) {
          acc.push({
            id: phone.category.id,
            name: phone.category.name,
            slug: phone.category.slug,
            description: phone.category.description,
            phones: [phone]
          });
        } else {
          acc[categoryIndex].phones.push(phone);
        }
        return acc;
      }, []);
      set({ phones, categories: categorizedPhones, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useFilteredPhoneStore;
