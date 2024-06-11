import PropTypes from "prop-types";
const PhantomDownloads = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data?.map((phone) => (
        <>
          <div key={phone.id}>{phone.title}</div>
        </>
      ))}
    </div>
  );
};

PhantomDownloads.propTypes = {
  data: PropTypes.any
};

export default PhantomDownloads;
