import PropTypes from "prop-types";
const Title = (props) => {
  return <p className="title">{props.props}</p>;
};

Title.propTypes = {
  props: PropTypes.string.isRequired
};

export default Title;
