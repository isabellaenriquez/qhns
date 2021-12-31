import './App.css';
import { Outlet, Link } from 'react-router-dom';
// import { ReactSVG } from 'react-svg';
import { ReactComponent as NavWave } from './assets/nav-wave.svg';
import logo from './assets/logo.png';
import { useLocation } from 'react-router-dom';
import Button from './components/Button';

export default function App() {
  return (
    <div>
      <div id='navbar'>
        <NavWave />
        <div id='navbar-content'>
          <img className='logo' src={logo} alt="QHNS' logo" />
          <nav>
            <Link
              className={useLocation().pathname === '/' ? 'active' : ''}
              to='/'
            >
              Home
            </Link>
            <Link
              className={useLocation().pathname === '/about' ? 'active' : ''}
              to='/about'
            >
              About
            </Link>
            <Link
              className={
                useLocation().pathname === '/get-involved' ? 'active' : ''
              }
              to='/get-involved'
            >
              Get Involved
            </Link>
          </nav>
        </div>
      </div>
      {useLocation().pathname === '/' ? (
        <main id='home'>
          <h1>Simple, Easy, &amp; Healthy.</h1>
          <h2>Welcome to Queen's Health and Nutrition Society!</h2>
          <Button path='/about' text='Learn More' />
        </main>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
