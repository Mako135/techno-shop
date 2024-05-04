import PhonesCard from "./PhonesCard";
import spark from '../../assets/fullSpark.png'

const Phones = () => {
  const phones = [
    {
      id: 1,
      imgBlack: spark, // Assuming spark is an image variable
      imgWhite: spark,
      imgBlue: spark,
      imgYellow: spark,
      title: "SPARK GO",
      price: "200000"
    },
    {
      id: 2,
      imgBlack: spark, // Assuming phantom is another image variable
      imgWhite: spark,
      title: "PHANTOM X",
      price: "350000"
    },
    {
      id: 3,
      imgBlack: spark, // Assuming nova is another image variable
      imgWhite: spark,
      title: "NOVA 10",
      price: "280000"
    }
  ];
  return (
    <div className="phones">
      {phones
        .map((phone) => (
          <PhonesCard key={phone.id} spec={phone}/>
        ))}
    </div>
  );
};

export default Phones;
