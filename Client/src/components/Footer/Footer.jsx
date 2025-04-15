import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          {/* <img src={assets.Logo} alt="" /> */}
          <h1>AOZORA.</h1>
          <p>A Fruits Cart Website is an online store where customers
            can browse and buy fresh fruits easily. It offers a user-friendly
            interface, secure payments, and fast delivery options.
            With high-quality images and detailed descriptions,
            it ensures a seamless shopping experience.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>08232-57830</li>
            <li>contact@aozora.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 @ Aozora. All rights Reserved.</p>
    </div>
  )
}

export default Footer
