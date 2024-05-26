import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { API } from '../../services/store/usePhoneStore'
const Contant = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    question_text: "",
    is_followed_mailing: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!inputs.email || !inputs.question_text || !inputs.name) {
      toast.error("Поля не должны быть пустыми", {
        position: "bottom-right",
        theme: "colored"
      });
      return;
    }
    if (!emailPattern.test(inputs.email)) {
      toast.error(
        "Пожалуйста, введите действительный адрес электронной почты.",
        {
          position: "bottom-right",
          theme: "colored"
        }
      );
      return;
    }
    if (inputs.question_text.length > 255) {
      toast.error("Сообщение не может быть длиннее 255 символов!", {
        position: "bottom-right",
        theme: "colored"
      });
      return;
    }

    const sendForm = async () => {
      const response = await fetch(`${API}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response;
    };

    toast
      .promise(
        sendForm(),
        {
          pending: "Отправка данных...",
          success: "Успешно отправлено!",
          error: "Произошла ошибка при отправке данных"
        },
        {
          position: "bottom-right",
          pauseOnFocusLoss: false,
          theme: "colored"
        }
      )
      .then(() => {
        setInputs({
          name: "",
          email: "",
          question_text: "",
          is_followed_mailing: false
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className="contact-left-content">
          <div className="contant-title">У вас остались вопросы?</div>
          <div className="contant-subtitle">
            Пожалуйста оставьте свои данные, мы обязательно свяжемся с вами
          </div>
          <ToastContainer />
        </div>
      </div>
      <div className="contact-right">
        <input
          type="text"
          name="name"
          placeholder="Имя"
          onChange={handleInputChange}
          value={inputs.name}
          max={100}
        />
        <input
          type="email"
          name="email"
          placeholder="Емайл"
          onChange={handleInputChange}
          value={inputs.email}
          max={100}
        />
        <textarea
          name="question_text"
          placeholder="Ваше сообщение"
          onChange={handleInputChange}
          value={inputs.question_text}
          max={255}
        ></textarea>
        <label htmlFor="mailing">
          <input
            type="checkbox"
            name="is_followed_mailing"
            id="mailing"
            onChange={handleInputChange}
            checked={inputs.is_followed_mailing}
          />
          Подписаться на рассылку новостей и акций от Tecno
        </label>
        <button type="button" onClick={handleForm} className="contact-button">
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Contant;
