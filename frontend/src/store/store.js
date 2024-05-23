import create from "zustand";

// Создание хранилища Zustand
const usePhoneStore = create(set => ({
  phone: null,
  loading: false,
  error: null,

  fetchPhoneById: async id => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/phones/${id}`);
      if (!response.ok) {
        throw new Error("Ошибка при получении данных");
      }
      const data = await response.json();
      set({ phone: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default usePhoneStore;
