import icon from './assets/logo-rk.png';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar icon={icon} />
      <Header icon={icon} />
      <About />
      <SocialMediaLinks />
      <Footer />
    </div>
  );
}

export default App;
