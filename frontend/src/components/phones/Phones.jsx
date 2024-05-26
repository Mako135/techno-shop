import PhonesCard from "./PhonesCard";
import { useEffect } from "react";
import useLanguageStore from "../../store/useLanguageStore";
import useFilteredPhoneStore from "../../store/FlteredPhoneStore";

const Phones = () => {
  const { phones, loading, error, fetchCameras } = useFilteredPhoneStore();
  const { language } = useLanguageStore();
  useEffect(() => {
    fetchCameras();
  }, [fetchCameras, language]);

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
