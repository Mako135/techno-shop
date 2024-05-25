import PhonesCard from "./PhonesCard";
import { useEffect } from "react";
import usePhoneStore from "../../store/usePhoneStore";
import useLanguageStore from "../../store/useLanguageStore";

const Phones = () => {
  const { phones, loading, error, fetchAllPhones } = usePhoneStore();
  const { language } = useLanguageStore();
  useEffect(() => {
    fetchAllPhones();
  }, [fetchAllPhones, language]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(phones);
  return (
    <div className="phones">
      {phones?.map((phone) => (
        <PhonesCard key={phone.id} spec={phone} />
      ))}
    </div>
  );
};

export default Phones;
