import PhonesCard from "./PhonesCard";
import { useEffect } from "react";
import useLanguageStore from "../../services/store/useLanguageStore";
import useFilteredPhoneStore from "../../services/store/FlteredPhoneStore";
import { TbError404 } from "react-icons/tb";
const Phones = () => {
  const { phones, loading, error, fetchPhones } = useFilteredPhoneStore();
  const { language } = useLanguageStore();
  useEffect(() => {
    fetchPhones();
  }, [fetchPhones, language]);

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="data-not-found">
        <h2>Нет данных</h2>
        <TbError404 />
      </div>
    );

  return (
    <div className="phones">
      {phones.length > 0 ? (
        phones?.map((phone) => <PhonesCard key={phone.id} spec={phone} />)
      ) : (
        <div className="data-not-found">
          <h2>Нет данных по вашему фильтру</h2>
          <TbError404 />
        </div>
      )}
    </div>
  );
};

export default Phones;
