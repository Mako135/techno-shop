import PropTypes from "prop-types";

const PhoneDetailSection = ({ title, content }) => (
  <div className="phone-container">
    <p className="phone-detail-title">{title}</p>
    <div className="phone-detail-content">{content}</div>
  </div>
);

PhoneDetailSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.any
};

export default PhoneDetailSection;
