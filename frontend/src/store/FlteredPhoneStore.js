import create from "zustand";
import { API } from "./usePhoneStore";
import useLanguageStore from "./useLanguageStore";

const useFilteredPhoneStore = create(set => ({
  phones: [],
  loading: false,
  error: null,
  fetchCameras: async (params = {}) => {
    const {
      category = "",
      display = "",
      resolution = "",
      frontCamera = "",
      backCamera = "",
      touchId = "",
      battery,
      ram = []
    } = params;

    let minBattery;
    let maxBattery;

    switch (battery) {
      case "0-3000":
        minBattery = 0;
        maxBattery = 3000;
        break;
      case "3000-5000":
        minBattery = 3000;
        maxBattery = 5000;
        break;
      case "5000-":
        minBattery = 5000;
        maxBattery = Number.MAX_SAFE_INTEGER;
        break;
      default:
        minBattery = "";
        maxBattery = "";
        break;
    }

    const { language } = useLanguageStore.getState();
    set({ loading: true, error: null });
    try {
      const memoriesParam =
        ram.length > 0 ? `&memories=${ram.join("&memories=")}` : "";

      const url = `${API}/${language}/api/phones/?category__name=${category}&display=${display}&resolution=${resolution}&front_camera=${frontCamera}&back_camera=${backCamera}&has_touch_id=${touchId}&min_battery=${minBattery}&max_battery=${maxBattery}${memoriesParam}`;
      console.log(url);
      const response = await fetch(url);
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

export default useFilteredPhoneStore;
