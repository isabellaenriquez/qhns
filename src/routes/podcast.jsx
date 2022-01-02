import './podcast.css';
import qppLogo from '../assets/qpp.jpg';
import spotifyLogo from '../assets/icons/spotify.png';
import appleLogo from '../assets/icons/apple.png';

export default function Podcast() {
  return (
    <main id='podcast'>
      <h1>Queen's Power Podcast</h1>
      <div className='two-col-grid'>
        <div className='col'>
          <img id='qpp-logo' src={qppLogo} alt="Queen's Power Podcast" />
        </div>
        <div className='col'>
          <p id='podcast-description'>
            The Queen’s Health and Nutrition Society presents the Queen’s Power
            Podcast which focuses on wellness, nutrition and fitness targeted
            towards University Students. Hosted by Ali Romain, one of our social
            media coordinators, past episodes have focused on meal prep with
            Nutritionist Rebecca Douglas, Hormones and Mental Health with
            Naturopath Talia Marcheggiani and Meditation and Mindfulness with
            Lara Wharton. Listen now! And follow us to never miss an episode.
          </p>
        </div>
      </div>
      <div id='podcast-links' className='two-col-grid'>
        <a
          className='social-media'
          href='https://open.spotify.com/show/21tkkOMZqrZkskwOrWzGji?si=b0423d15cf104e3a'
        >
          <img className='social-media-icon' src={spotifyLogo} alt='Spotify' />
          <p>Listen to Queen's Power Podcast on Spotify</p>
        </a>
        <a
          className='social-media'
          href='https://podcasts.apple.com/us/podcast/queens-power-podcast/id1559886667'
        >
          <img
            className='social-media-icon'
            src={appleLogo}
            alt='Apple Podcasts'
          />
          <p>Listen to Queen's Power Podcast on Apple Podcasts</p>
        </a>
      </div>
    </main>
  );
}
