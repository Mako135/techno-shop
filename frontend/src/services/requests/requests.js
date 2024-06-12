
export const fetchData = async url => {
  console.log(url);
  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  return await response.json();
};

