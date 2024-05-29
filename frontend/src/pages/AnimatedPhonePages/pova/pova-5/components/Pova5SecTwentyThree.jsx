import arrow from "../assets/arrow.png";
const Pova5SecTwentyThree = () => {
  return (
    <div className="sec-23">
      <div className="sec-23-first">
        <div className="sec-23-first-content">
          <div>
            <h1>
              СВЕРХМОЩНЫЙ <br /> СИГНАЛ
            </h1>
            <p>
              Оцени выдающуюся производительность <br /> и бесперебойную связь
            </p>
          </div>
          <ul>
            <li>
              <img src={arrow} alt="" />
              <div>
                <span>Ha 20%</span>
                <p>улучшена пропускная способность сигнала</p>
              </div>
            </li>
            <li>
              <img src={arrow} alt="" />
              <div>
                <span>Ha 25% </span>
                <p>улучшена стабильность сигнала</p>
              </div>
            </li>
            <li>
              <img src={arrow} alt="" />
              <div>
                <span>Ha 30%</span>
                <p>улучшена скорость передачи данных при слабом сигнале сети</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="sec-23-second">
        <img src="" alt="" />
        <div className="pova-text">
          <h1>LINKBOOMING 1.0</h1>
          <h3>
            Двойное сетевое соединение помогает увеличить скорость Интернета
          </h3>
          <p>
            Попрощайся с медленным интернетом. Linkbooming 1.0 использует
            параллельное соединение Wi-Fi сигнала и сотовой сети для быстрой и
            стабильной работы.
          </p>
          <ul>
            <li>
              <img src={arrow} alt="" />
              <span>25</span>
              <p>Притормаживания уменьшились</p>
            </li>
            <li>
              <img src={arrow} alt="" />
              <span>25%</span>
              <p>Скорость соединения возросла</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pova5SecTwentyThree;
