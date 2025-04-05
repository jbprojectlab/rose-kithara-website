import './Navbar.css';

const Navbar = ({icon}) => {
    return <nav>
    <img src={icon} className="nav-icon" alt="icon" />
  </nav>
}

export default Navbar;
