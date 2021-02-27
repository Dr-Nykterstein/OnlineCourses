import React from 'react';
import './Footer.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe, if you want to receive your notifications
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your email'
            />
            <Button buttonStyle='btn-outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Navigation</h2>
            <Link to='/'>Home</Link>
            <Link to='/apartments'>Apartments</Link>
            <Link to='/why-us'>Why us</Link>
            <Link to='/sign-in'>Your account</Link>
            <Link to='/sign-up'>Create account</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Lodging Types</h2>
            <Link to='/apartments'>Apartments</Link>
            <Link to='/'>Resorts</Link>
            <Link to='/'>Villas</Link>
            <Link to='/'>Hostels</Link>
            <Link to='/'>Guest houses</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contacts</h2>
            <p className='footer-text'><i className="fas fa-phone" /> 0-800-301-205</p>
            <p className='footer-text'><i className="fas fa-map-marker-alt" /> Ukraine, Lviv, Dubova St</p>
            <p className='footer-text'><i className="fas fa-at" /> EasyLodg@gmail.com</p>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <i className='fas fa-door-open'></i>
              EasyLodging
            </Link>
          </div>
          <small className='website-rights'>EasyLodging © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
