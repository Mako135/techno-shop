import { useEffect, useState } from "react";

async function fetchData(pre_slug, slug) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api${pre_slug}${slug}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Ошибка:", error);
    return null;
  }
}

export function useFetchData(pre_slug, slug) {
  const [data, setData] = useState(null);

  useEffect(
    () => {
      async function usefetchData() {
        const data = await fetchData(pre_slug, slug);
        setData(data);
      }

      usefetchData();
    },
    [pre_slug, slug]
  ); // Добавлен data в зависимости

  return data;
}
