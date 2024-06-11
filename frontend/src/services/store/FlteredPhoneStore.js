import { create } from "zustand";
import { constructUrl } from "../url/urlCollector";
import { fetchData } from "../requests/requests";

const useFilteredPhoneStore = create(set => ({
  phones: [],
  categories: [],
  loading: false,
  error: null,
  fetchPhones: async (params = {}) => {
    set({ loading: true, error: null });

    try {
      const url = constructUrl(params);
      const data = await fetchData(url);

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
