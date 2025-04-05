import Description from '../Description/Description';
import FeatureVideo from '../FeatureVideo/FeatureVideo';
import './About.css';

const About = () => {
  return (
      <div className="about flex-container">
        <Description />
        <FeatureVideo />
      </div>
  );
}

export default About;
