import facebookLogo from '../assets/icons/facebook.png';
import instagramLogo from '../assets/icons/instagram.png';
import emailLogo from '../assets/icons/email.png';
import './getInvolved.css';
import Button from '../components/Button';
import qppLogo from '../assets/qpp.jpg';

export default function GetInvolved() {
  return (
    <main id='get-involved'>
      <h1>Get Involved</h1>
      <div className='two-col-grid'>
        <div className='col'>
          <p>
            Follow us on social media to stay up to date with our latest events
            and healthy lifestyle tips and recipes!
          </p>
          <a className='social-media' href='https://www.facebook.com/qhnsclub'>
            <img
              className='social-media-icon'
              src={facebookLogo}
              alt='Facebook'
            />
            <p>Queen’s Health and Nutrition Society - QHNS</p>
          </a>
          <a className='social-media' href='https://www.instagram.com/qhnsclub'>
            <img
              className='social-media-icon'
              src={instagramLogo}
              alt='Instagram'
            />
            <p>@qhnsclub</p>
          </a>
          <a className='social-media' href='mailto:qhns@clubs.queensu.ca'>
            <img className='social-media-icon' src={emailLogo} alt='Email' />
            <p>qhns@clubs.queensu.ca</p>
          </a>
        </div>
        <div className='col'>
          <div id='upcoming-events'>
            <h3>Upcoming Events</h3>
            <p>Stay tuned!</p>
          </div>
          <Button path='/get-involved/podcast'>
            <img
              src={qppLogo}
              width='100%'
              alt="Queen's Power Podcast"
              style={{ borderRadius: '20px', border: 'solid white 1px' }}
            ></img>
            Click here to learn about Queen's Power Podcast!
          </Button>
        </div>
      </div>
    </main>
  );
}
