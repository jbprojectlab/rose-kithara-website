import './LogoBanner.css';

const LogoBanner = ({icon}) => {
  return (
      <div className="logo-banner">
        <img src={icon} className="logo-banner-icon" alt="logo banner" />
      </div>
  );
}

export default LogoBanner;
