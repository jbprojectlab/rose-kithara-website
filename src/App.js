import logo from './assets/logo-rk.png';
import facebookLogo from './assets/social-icons/facebook.png';
import instagramLogo from './assets/social-icons/instagram.png'
import youtubeLogo from './assets/social-icons/youtube.png'
import './App.css';

function App() {
  const socialLinks = {
    facebook: 'https://www.facebook.com/share/inpZGQCrp72F1EmW/?mibextid=LQQJ4d',
    youtube: 'https://youtube.com/@RoseKithara?si=pqAB0RLZM4CQODIU',
    instagram: 'https://www.instagram.com/rosekitharaband?igsh=MXhoNHU2dmRjb29ncA%3D%3D&utm_source=qr'
  }

  return (
    <div className="App">
      <nav>
        <img src={logo} className="nav-logo" alt="logo" />
      </nav>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>COMING SOON</p>
      </header>
      <div className='social-links'>
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="facebook" />
        </a>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
          <img src={youtubeLogo} alt="youtube" />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="instagram" />
        </a>
      </div>
      <footer>
        <p>&copy;2024 Rose Kithara</p>
      </footer>
    </div>
  );
}

export default App;
