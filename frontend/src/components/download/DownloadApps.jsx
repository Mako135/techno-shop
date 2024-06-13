const DownloadApps = () => {
  return (
    <div>
      <div className="download-apps">
        <div className="download-apps-title">
          <h2>Скачайте приложения</h2>
        </div>
        <div className="download-apps-content">
          <a
            href="https://play.google.com/store/apps/details?id=com.afmobi.boomplayer"
            className="download-app"
            target="_blank"
          >
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/APPS/Boom-Player.png"
              alt=""
            />
            <p>Boomplay Music</p>
          </a>
          <a
            href="http://s1.palmplaystore.com/static/palmplay_apk/af1234/palmstore.apk"
            className="download-app"
            target="_blank"
          >
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/APPS/plamstore.png"
              alt=""
            />
            <p>Plam Store</p>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.transsion.tecnospot"
            className="download-app"
            target="_blank"
          >
            <img
              src="https://d3fyizz0b46qgr.cloudfront.net/global/APPS/tecno1-spot.png"
              alt=""
            />

            <p>TECNO Community</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApps;
