import parse from "html-react-parser";

export const createSections = (phone) => {
  const safeParse = (content) =>
    typeof content === "string" ? parse(content) : null;

  return [
    phone?.title
      ? { title: "Название", content: safeParse(phone?.title) }
      : null,
    phone?.operating_system
      ? {
          title: "Операционная система",
          content: safeParse(phone?.operating_system)
        }
      : null,
    phone?.cpu_info
      ? { title: "Процессор", content: safeParse(phone?.cpu_info) }
      : null,
    phone?.network
      ? {
          title: "Сети",
          content: phone.network.map((network) => (
            <p key={network.id}>{network?.name}</p>
          ))
        }
      : null,
    phone?.size ? { title: "Размеры", content: safeParse(phone?.size) } : null,
    phone?.display_info
      ? { title: "Экран", content: safeParse(phone?.display_info) }
      : null,
    phone?.resolution_info
      ? { title: "Разрешение", content: safeParse(phone?.resolution_info) }
      : null,
    phone?.camera_info
      ? { title: "Камера", content: safeParse(phone?.camera_info) }
      : null,
    phone?.memories
      ? {
          title: "Память",
          content: phone.memories.map((memory) => (
            <p key={memory.id}>{memory.size} GB</p>
          ))
        }
      : null,
    phone?.connection
      ? { title: "Подключения", content: safeParse(phone?.connection) }
      : null,
    phone?.sensors
      ? { title: "Сенсоры", content: safeParse(phone?.sensors) }
      : null,
    phone?.battery_info
      ? { title: "Аккумулятор", content: safeParse(phone?.battery_info) }
      : null,
    phone?.sound_info
      ? { title: "Динамики", content: safeParse(phone?.sound_info) }
      : null,
    phone?.cellurral_info
      ? { title: "Сотовая связь", content: safeParse(phone?.cellurral_info) }
      : null,
    phone?.audio_video_info
      ? { title: "Аудио и Видео", content: safeParse(phone?.audio_video_info) }
      : null,
    phone?.complete_set
      ? { title: "Комплект поставки", content: safeParse(phone?.complete_set) }
      : null,
    phone?.biometric_info
      ? { title: "Биометрия", content: safeParse(phone?.biometric_info) }
      : null,
    phone?.parameters_info
      ? { title: "Параметры", content: safeParse(phone?.parameters_info) }
      : null,
    phone?.record_video
      ? { title: "Запись видео", content: safeParse(phone?.record_video) }
      : null,
    phone?.possible_connection
      ? {
          title: "Возможность подключения",
          content: safeParse(phone?.possible_connection)
        }
      : null
  ].filter((item) => item !== null);
};
