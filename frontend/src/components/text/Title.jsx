
const Title = (props) => {
  // eslint-disable-next-line react/prop-types
  const { text } = props; // Destructure text prop
  return <p className="title">{text}</p>;
};

export default Title