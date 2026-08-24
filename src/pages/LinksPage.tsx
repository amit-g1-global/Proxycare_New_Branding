import React from 'react';
import { Link } from 'react-router-dom';

import LogoMain from '../assets/Logo_Main.png';

export default function LinksPage() {
  return (
    <div className="pc-links-container">
      <div className="pc-links-content">
        {/* Logo Section */}
        <div className="pc-links-logo-wrapper">
          <img src={LogoMain} alt="Proxycare Logo" className="pc-links-logo" />
        </div>

        {/* Action Buttons Section */}
        <div className="pc-links-buttons">
          <Link to="/" className="pc-links-button">
            Our Website
          </Link>
          <a href="/Services_Brochure.pdf" target="_blank" rel="noopener noreferrer" className="pc-links-button">
            Our Services
          </a>
          <a href="/assets/Proxycare_Femal_Voice.mp4" target="_blank" rel="noopener noreferrer" className="pc-links-button">
            Introduction Video
          </a>
        </div>

        {/* Social Links Section */}
        <div className="pc-links-socials">
          <a href="https://www.linkedin.com/company/myproxycare" target="_blank" rel="noopener noreferrer" className="pc-links-social-icon">
            <img src="/assets/linkedin_CLR.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/proxycare.india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="pc-links-social-icon">
            <img src="/assets/instagram_CLR.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/proxycare.india" target="_blank" rel="noopener noreferrer" className="pc-links-social-icon">
            <img src="/assets/facebook_CLR.png" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/channel/UC1HKRNh1Z7wbG-F3F0MX0Ug" target="_blank" rel="noopener noreferrer" className="pc-links-social-icon">
            <img src="/assets/youtube_CLR.png" alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
}
