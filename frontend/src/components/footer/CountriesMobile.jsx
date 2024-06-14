import { useState } from "react";
import Accordion from "../../feautures/Accordion";
import { COUNTRIES } from "../../services/countries/Countries";
import { Link } from "react-router-dom";
const CountriesMobile = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="mobile-countries">
      {Object.keys(COUNTRIES).map((region) => (
        <Accordion
          key={region}
          title={region}
          toggleAccordion={() => toggleAccordion(region)}
          isOpen={openIndex === region}
        >
          {COUNTRIES[region].map((country) => (
            <ul key={country.name}>
              <Link to={country.link}>
                <li>
                  <img src={country.img} alt="" />
                  <span>{country.name}</span>
                </li>
              </Link>
            </ul>
          ))}
        </Accordion>
      ))}
    </div>
  );
};

export default CountriesMobile;
