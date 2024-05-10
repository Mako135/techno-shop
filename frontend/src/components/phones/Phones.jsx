import PhonesCard from "./PhonesCard";
import { useFetchData } from "../../requests/requests";

const Phones = () => {
  const phones = useFetchData("/phones", "");

 
  console.log(phones);
  return (
    <div className="phones">
      {phones?.map((phone) => (
          <PhonesCard key={phone.id} spec={phone}/>
        ))}
    </div>
  );
};

export default Phones;
