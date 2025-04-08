import './Header.css';

const Header = () => {
  return (
    <header className="header flex-container">
      <div className="header-left">
          <h3>ROCK BAND</h3>
          <h2>DAYTONA</h2>
          <h2>BEACH</h2>
      </div>
      <div className="header-right">
        <h4>FROM</h4>
        <h2>FL</h2>
      </div>
    </header>
  );
}

export default Header;
