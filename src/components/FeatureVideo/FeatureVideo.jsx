import YouTube from 'react-youtube';
import './FeatureVideo.css';

const FeatureVideo = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  return <YouTube videoId="n73aw6NwFxs" opts={opts} className="feature-video" />
}

export default FeatureVideo;
