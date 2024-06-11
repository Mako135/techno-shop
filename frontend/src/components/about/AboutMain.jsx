import Title from "../text/Title";

const AboutMain = () => {
  return (
    <div>
      <Title props="О Tecno" />
      <p>
        Tecno — бренд смартфонов премиального качества и устройств, объединяющих
        Интернет вещей с ИИ, принадлежащий компании Transsion Holdings.
      </p>
      <br />
      <p>
        Компания Tecno понимает потребности клиентов на разных рынках и
        предлагает самые инновационные технические и дизайнерские решения,
        учитывая местную специфику рынков. Продукция компании идеально подходит
        потребителям, которые “молоды душой” и постоянно стремятся к
        совершенству. В линейку продуктов Tecno входят смартфоны, планшеты,
        интеллектуальные нательные устройства и устройства, где интернет вещей
        сочетается с ИИ. Устройства доступны на более чем 70 развивающихся
        рынках по всему миру. Tecno является официальным партнером “Манчестер
        Сити”, чемпиона премьер-лиги в 2020-2021 гг.
      </p>
      <div className="slogan">
        <div className="slogan-title">
          <p>Наш Слоган</p>
          <h3>STOP AT NOTHING</h3>
        </div>
        <div className="slogan-text">
          <p>
            Суть бренда — STOP AT NOTHING. Мы стремимся использовать лучшие
            современные технологии и работаем для прогрессивных людей на
            развивающихся рынках мира. Мы производим интеллектуальные продукты с
            элегантным дизайном, которые вдохновляют потребителей на открытие
            мира новых возможностей.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMain