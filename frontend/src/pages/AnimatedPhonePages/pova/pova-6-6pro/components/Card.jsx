import '../pova.css'
import PropTypes from "prop-types";
import arrow from "../assets/arrow.png";
import frame from '../assets/container_1.png'
const Card = ({ imageSrc,  title }) => {

  return (
    <div className="card-container">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="card-frame" style={{ backgroundImage: `url(${frame})` }}>
        <div className="card-text">
          {title}
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};



export default Card