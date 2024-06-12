import PropTypes from "prop-types";
const PhantomDownloads = ({ data }) => {
  return (
    <div>
      {data?.map((phone) => (
        <div key={phone.id} className="download-phone-card">
          <img src={phone.photos[0].image} alt="" />
          <p>{phone.title}</p>
        </div>
      ))}
    </div>
  );
};

PhantomDownloads.propTypes = {
  data: PropTypes.array
};

export default PhantomDownloads;
