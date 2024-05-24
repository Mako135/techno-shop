import phones from '../assets/phones.png'
const FoldSecOne = () => {

  return (
    <div className="fold-one">
      <div className="content">
        <div className="logo_wrapper">
          <img
            src="https://d3fyizz0b46qgr.cloudfront.net/global/phones/phantom-v-fold/ru/images/firstSection/logoRU.jpg"
            alt=""
          />
        </div>
        <div className="phone_wrapper">
          <img src={phones} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoldSecOne;
