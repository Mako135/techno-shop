import parse from "html-react-parser";

export const createSections = (phone) => {
  const safeParse = (content) =>
    typeof content === "string" ? parse(content) : null;

  return [
    { title: "Название", content: safeParse(phone?.title) },
    {
      title: "Операционная система",
      content: safeParse(phone?.operating_system)
    },
    { title: "Процессор", content: safeParse(phone?.cpu_info) },
    {
      title: "Сети",
      content: phone?.network?.map((network) => (
        <p key={network.id}>{network?.name}</p>
      ))
    },
    { title: "Размеры", content: safeParse(phone?.size) },
    {
      title: "Экран",
      content: safeParse(phone?.display_info)
    },
    { title: "Разрешение", content: safeParse(phone?.resolution_info) },
    { title: "Камера", content: safeParse(phone?.camera_info) },
    {
      title: "Память",
      content: phone?.memories?.map((memory) => (
        <p key={memory.id}>{memory.size} GB</p>
      ))
    },
    { title: "Подключения", content: safeParse(phone?.connection) },
    { title: "Сенсоры", content: safeParse(phone?.sensors) },
    { title: "Аккумулятор", content: safeParse(phone?.battery_info) },
    { title: "Динамики", content: safeParse(phone?.sound_info) },
    { title: "Сотовая связь", content: safeParse(phone?.cellurral_info) },
    { title: "Аудио и Видео", content: safeParse(phone?.audio_video_info) },
    { title: "Комплект поставки", content: safeParse(phone?.complete_set) },
    { title: "Биометрия", content: safeParse(phone?.biometric_info) },
    { title: "Параметры", content: safeParse(phone?.parameters_info) },
    { title: "Запись видео", content: safeParse(phone?.record_video) },
    {
      title: "Возможность подключения",
      content: safeParse(phone?.possible_connection)
    }
  ];
};
