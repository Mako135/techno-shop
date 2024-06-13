import fullSpark from "../../assets/fullSpark.png";
import spark_plus from "../../assets/recommended/spark_plus.png";
import flip from "../../assets/recommended/flip.png";
import pova_6 from "../../assets/recommended/pova_6.png";
import pova_5_pro from "../../assets/recommended/pova_5_pro.webp";
import spark_20 from "../../assets/recommended/spark_20.webp";
import RecommendedPhones from "./RecommendedPhones";

const HomePhones = () => {
  return (
    <div className="recommended-phones">
      <RecommendedPhones
        spec1="6.78” экран с частотой 120 Гц"
        spec2="128 Гб + 16 Гб* память"
        spec3="5000 мАч + быстрая зарядка 33 Вт"
        title="SPARK 20 Pro+"
        img={spark_plus}
        link="spark-20-pro-plus"
      />
      <RecommendedPhones
        spec1="6.6” экран с частотой 20 Гц"
        spec2="256 Гб + 8 Гб* память"
        spec3="4000 мАч + быстрая зарядка 45 Вт"
        title="PHANTOM V FLIP 5G"
        img={flip}
        link="phantom-v-flip-5g"
      />
      <RecommendedPhones
        spec1="6.6” экран с частотой 90 Гц"
        spec2="128 Гб + 8 Гб* память"
        spec3="5000 мАч аккумулятор Type-C"
        title="SPARK Go 2024"
        img={fullSpark}
        link="spark-go-2024"
      />
      <RecommendedPhones
        spec1="6.8” FHD+ AMOLED экран  с частотой 120 Гц"
        spec2="128 Гб + 8 Гб* память"
        spec3="6000 мАч аккумулятор Type-C"
        title="POVA 6"
        img={pova_6}
        link="pova-6"
      />
      <RecommendedPhones
        spec1="6.8” FHD+ экран с частотой обновления 120 Гц"
        spec2="256 Гб + 8 Гб* память"
        spec3="5000 мАч и упербыстрая зарядка 68 Вт"
        title="POVA 5 Pro 5G"
        img={pova_5_pro}
        link="pova-5-pro-5g"
      />
      <RecommendedPhones
        spec1="6.6” экран с частотой 90 Гц"
        spec2="128 Гб + 8 Гб* память"
        spec3="5000 мАч и 18 Вт быстрая зарядка"
        title="SPARK 20"
        img={spark_20}
        link="spark-20"
      />
    </div>
  );
};

export default HomePhones;
