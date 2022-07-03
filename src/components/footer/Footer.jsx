import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Gesiel Neves</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.facebook.com/gesiel.neves.56/'><FaFacebookF/></a>
        <a href='https://www.instagram.com/gesielneves/'><FiInstagram/></a>
        <a href='https://twitter.com/GesielNevesSC'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Gesiel Neves. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer