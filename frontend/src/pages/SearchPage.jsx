import { useState, useEffect } from "react";
import PhonesCard from "../components/phones/PhonesCard";
import { API } from "../services/store/usePhoneStore";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const fetchPhones = async () => {
      if (searchText.trim() === "") {
        setPhones([]);
        return;
      }
      try {
        const response = await fetch(`${API}/api/phones/?search=${searchText}`);
        const data = await response.json();
        setPhones(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPhones();
  }, [searchText]);

  const handleChange = (event) => {
      setSearchText(event.target.value);
  };

  return (
    <div className="container">
      <div className="search-content">
        <h3>Поиск по смартфонам</h3>
        <input type="text" placeholder="ищите здесь" value={searchText} onChange={handleChange} />
        <div className="phones">
          {phones.map((phone) => (
            <PhonesCard key={phone.id} spec={phone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
