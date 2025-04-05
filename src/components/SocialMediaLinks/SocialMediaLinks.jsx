import facebookIcon from '../../assets/social-icons/facebook.png';
import instagramIcon from '../../assets/social-icons/instagram.png';
import youtubeIcon from '../../assets/social-icons/youtube.png';
import socialLinks from './links.json';
import './SocialMediaLinks.css';

const SocialMediaLinks = () => {
    return <div className="social-links-container flex-container flex-vertical">
        <div className="social-links">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="facebook" />
            </a>
            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="youtube" />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="instagram" />
            </a>
        </div>
        <span className="email">ROSEKITHARABAND@GMAIL.COM</span>
    </div>
}

export default SocialMediaLinks;
