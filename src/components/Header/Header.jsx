import './Header.css';

const Header = ({icon}) => {
  return (
      <header className="app-header">
        <img src={icon} className="app-icon" alt="band logo" />
      </header>
  );
}

export default Header;
