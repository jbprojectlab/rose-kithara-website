import icon from './assets/logo-rk.png';
import SocialMediaLinks from './components/SocialMediaLinks/SocialMediaLinks';
import Navbar from './components/Navbar/Navbar';
import LogoBanner from './components/LogoBanner/LogoBanner';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './App.css';
import LiveSchedule from './components/LiveSchedule/LiveSchedule';

function App() {
  return (
    <div className="App">
      <Navbar icon={icon} />
      <About />
      <LiveSchedule />
      <LogoBanner icon={icon} />
      <SocialMediaLinks />
      <Footer />
    </div>
  );
}

export default App;
