import './App.css';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
// import { ReactSVG } from 'react-svg';
import { ReactComponent as NavWave } from './assets/nav-wave.svg';
import logo from './assets/logo.png';
import { useLocation } from 'react-router-dom';
import Button from './components/Button';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <button id='hamburger' onClick={() => setIsNavOpen(!isNavOpen)}>
        <div className='hamburger-strip'></div>
        <div className='hamburger-strip'></div>
        <div className='hamburger-strip'></div>
      </button>
      <div id='mobile-navbar' className={isNavOpen ? ' open' : ''}>
        <nav className='col'>
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
          <div className='mobile-dropdown col'>
            <Link
              className={
                useLocation().pathname === '/about/meet-the-team'
                  ? 'active'
                  : ''
              }
              to='/about/meet-the-team'
            >
              Meet the Team
            </Link>
          </div>
          <Link
            className={
              useLocation().pathname === '/get-involved' ? 'active' : ''
            }
            to='/get-involved'
          >
            Get Involved
          </Link>
          <div className='mobile-dropdown col'>
            <Link
              className={
                useLocation().pathname === '/get-involved/podcast'
                  ? 'active'
                  : ''
              }
              to='/get-involved/podcast'
            >
              Queen's Power Podcast
            </Link>
            <Link
              className={
                useLocation().pathname === '/get-involved/recipes'
                  ? 'active'
                  : ''
              }
              to='/get-involved/recipes'
            >
              Recipes
            </Link>
          </div>
        </nav>
      </div>
      <div id='desktop-navbar'>
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
            <div className='link-group'>
              <Link
                className={useLocation().pathname === '/about' ? 'active' : ''}
                to='/about'
              >
                About
              </Link>
              <div className='dropdown'>
                <Link
                  className={
                    useLocation().pathname === '/about/meet-the-team'
                      ? 'active'
                      : ''
                  }
                  to='/about/meet-the-team'
                >
                  Meet the Team
                </Link>
              </div>
            </div>
            <div className='link-group'>
              <Link
                className={
                  useLocation().pathname === '/get-involved' ? 'active' : ''
                }
                to='/get-involved'
              >
                Get Involved
              </Link>
              <div className='dropdown'>
                <Link
                  className={
                    useLocation().pathname === '/get-involved/podcast'
                      ? 'active'
                      : ''
                  }
                  to='/get-involved/podcast'
                >
                  Queen's Power Podcast
                </Link>
                <Link
                  className={
                    useLocation().pathname === '/get-involved/recipes'
                      ? 'active'
                      : ''
                  }
                  to='/get-involved/recipes'
                >
                  Recipes
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {useLocation().pathname === '/' ? (
        <main id='home'>
          <h1>Simple, Easy, &amp; Healthy.</h1>
          <h2>Welcome to Queen's Health and Nutrition Society!</h2>
          <Button path='/about' text='Learn More'>
            Learn More
          </Button>
        </main>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
