import { API } from "./../store/usePhoneStore";

const getBatteryRange = battery => {
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
  return { minBattery, maxBattery };
};

// Функция для формирования URL с параметрами
export const constructUrl = params => {
  let {
    category = "",
    display = "",
    resolution = "",
    frontCamera = "",
    backCamera = "",
    touchId = "",
    battery,
    ram = [],
    minRes = ""
  } = params;

  const { minBattery, maxBattery } = getBatteryRange(battery);
  const memoriesParam =
    ram.length > 0 ? `&memories=${ram}` : "";
  return `${API}/api/phones/?category__name=${category}&display=${display}&resolution=${resolution}&front_camera=${frontCamera}&back_camera=${backCamera}&has_touch_id=${touchId}&min_battery=${minBattery}&max_battery=${maxBattery}${memoriesParam}&min_resolution=${minRes}`;
};
