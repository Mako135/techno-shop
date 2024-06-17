import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CountriesContent = ({ data }) => {
  return (
    <ul className="country-list">
      {data.map((counry) => (
        <Link key={counry.name} to={counry.link} target="_blank">
          <li>
            <img src={counry.img} alt="" loading="lazy" />
            <span>{counry.name}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
};
CountriesContent.propTypes = {
  data: PropTypes.any,
};

export default CountriesContent;
