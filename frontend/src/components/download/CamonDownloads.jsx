import PropTypes from "prop-types";

const CamonDownloads = ({data}) => {
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

CamonDownloads.propTypes = {
  data: PropTypes.array
};

export default CamonDownloads;
