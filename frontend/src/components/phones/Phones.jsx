import PhonesCard from "./PhonesCard";
import { useEffect } from "react";
import useLanguageStore from "../../services/store/useLanguageStore";
import useFilteredPhoneStore from "../../services/store/FlteredPhoneStore";

const Phones = () => {
  const { phones, loading, error, fetchPhones } = useFilteredPhoneStore();
  const { language } = useLanguageStore();
  useEffect(() => {
    fetchPhones();
  }, [fetchPhones, language]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="phones">
      {phones?.map((phone) => (
        <PhonesCard key={phone.id} spec={phone} />
      ))}
    </div>
  );
};

export default Phones;
